'use server';

import {OperationResult} from "@/lib/types/operation-result";
import {serverActionWrapper} from "@/lib/actions/server-action-wrapper";
import {httpService} from "@/lib/services/http/http.service";
import {SignIn} from "@/app/(auth)/signin/_types/signin.interface";

export async function signIn(formState: OperationResult<string> | null, formData: FormData) {
    const mobile = formData.get('mobile') as string;

    return serverActionWrapper<string>(async () => await httpService.post<SignIn, string>("/signin", {mobile: mobile}));
}

export async function sendAuthCode(formState: OperationResult<string> | null, data: SignIn) {
    return serverActionWrapper<string>(async () => await httpService.post<SignIn, string>("/send-auth-code", data))
}

