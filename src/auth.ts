import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {httpService} from "@/lib/services/http/http.service";
import {VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";
import {User, UserSession, UserToken} from "@/lib/types/user.interface";
import {authConfig} from "@/auth.config";
import {jwtDecode} from "jwt-decode";
import {JWT} from 'next-auth/jwt'

declare module 'next-auth' {
    interface User {
        accessToken: string;
    }

    interface Session {
        user: UserSession;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user: UserToken
        role?: string[]
    }
}

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: "credentials",
            credentials: {
                username: {label: "username", type: "text"},
                code: {label: "code", type: "text"},
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.code) return null;
                try {
                    const response = await httpService.post<VerifyUserModel, User>(`/verify`, {
                        username: credentials.username as string,
                        code: credentials.code as string,
                    });
                    const user = {
                        accessToken: response.token
                    };
                    return user
                } catch {
                    throw new Error('error!!!');
                }
            }
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.user = jwtDecode<UserToken>(user.accessToken)
                token.user.accessToken = user.accessToken
            }
            return token
        },
        async session({session, token}) {
            Object.assign(session.user, token.user ?? {})
            return session
        }
    }
});
