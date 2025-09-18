'use server';

import {OperationResult} from "@/lib/types/operation-result";
import {serverActionWrapper} from "@/lib/actions/server-action-wrapper";
import {httpService} from "@/lib/services/http/http.service";
import {SignIn} from "@/app/(auth)/signin/_types/signin.interface";
import {Problem} from "@/lib/types/http-errors.interface";
import {VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";
import {signIn, signOut} from "@/auth";

export async function signInAction(formState: OperationResult<string> | null, formData: FormData) {
    const mobile = formData.get('mobile') as string;

    return serverActionWrapper<string>(async () => await httpService.post<SignIn, string>("/signin", {mobile: mobile}));
}

export async function sendAuthCode(formState: OperationResult<string> | null, data: SignIn) {
    return serverActionWrapper<string>(async () => await httpService.post<SignIn, string>("/send-auth-code", data))
}

export async function verify(state: Problem | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData)
    } catch (error) {
        return {
            status: 0,
            title: "",
        } satisfies Problem
    }
}

export async function logout() {
    try {
        await signOut()
    } catch (error) {
        //     TODO:better error handling
        console.error(error);
    }
}