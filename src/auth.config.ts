import {NextAuthConfig} from "next-auth";

export const authConfig: NextAuthConfig = {
    pages: {
        signIn: '/signin',
    },
    callbacks: {
    },
    providers: [],
}
