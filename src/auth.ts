import NextAuth, {NextAuthConfig} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {httpService} from "@/lib/services/http/http.service";
import {VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";
import {User} from "@/lib/types/user.interface";
import {authConfig} from "@/auth.config";


declare module 'next-auth' {
    interface User {
        accessToken: string;
    }

    interface Session {
        user: UserSession;
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
                    const user = await httpService.post<VerifyUserModel, User>(`/verify`, {
                        username: credentials.username as string,
                        code: credentials.code as string,
                    });
                    return {accessToken: user.token};
                } catch (error: unknown) {
                    throw new Error('error!!!');
                }
            }
        }),
    ]
});
