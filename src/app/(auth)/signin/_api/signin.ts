import {SignIn} from "@/app/(auth)/signin/_types/signin.interface";
import {httpService} from "@/lib/services/http/http.service";
import {useMutation} from "@tanstack/react-query";

const signin = (model: SignIn): Promise<void> => httpService.post<SignIn, void>("/signin", model);


type UseSignInOptions = {
    onSuccess?: () => void;
}

export const useSignIn = ({onSuccess}: UseSignInOptions) => {
    const {mutate: submit, isPending} = useMutation({
        mutationFn: signin,
        onSuccess: onSuccess,
    })
    return {submit, isPending}
}