import {httpService} from "@/lib/services/http/http.service";
import {useMutation} from "@tanstack/react-query";

export const SendAuthCode = (username: string): Promise<never> => {
    return httpService.post("/send-auth-code", { username });
};

type UseSendAuthCodeOptions = {
    onSuccess?: () => void;
};

export const useSendAuthCode = ({ onSuccess }: UseSendAuthCodeOptions = {}) => {
    const { mutate: submit, isPending } = useMutation({
        mutationFn: SendAuthCode,
        onSuccess: onSuccess,
    });

    return { submit, isPending };
};