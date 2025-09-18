"use client";

import Button from "@/ui/components/button/button.component";
import {useForm} from "react-hook-form";
import {SignIn} from "@/app/(auth)/signin/_types/signin.interface";
import {TextInput} from "@/ui/components/form-inputs";
import {useRouter} from "next/navigation";
import {useNotificationStore} from "@/lib/stores/notification.store";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignInSchema} from "@/app/(auth)/signin/_types/signin.schema";
import {signIn} from "@/lib/actions/auth";
import {useActionState, useEffect, useTransition} from "react";

const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues
    } = useForm<SignIn>({resolver: zodResolver(SignInSchema)}
    );
    const router = useRouter();

    const showNotification = useNotificationStore(state => state.showNotification);

    const [formState, action] = useActionState(signIn, null)
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (formState && !formState.isSuccess && formState.error) {
            showNotification({
                type: "error",
                message: `${formState.error?.detail}`,
            })
        } else if (formState && formState.isSuccess) {
            router.push(`/verify?mobile=${getValues('mobile')}`);
            showNotification({
                type: "info",
                message: 'کد تایید به شماره شما ارسال شد',
            })
            console.log(formState.response)
        }
    }, [formState, showNotification])

    const onSubmit = async (data: SignIn) => {

        const formData = new FormData();
        formData.set('mobile', data.mobile)
        startTransition(async () => {
            action(formData);
        })
    }

    return (
        <>
            <h5 className="text-2xl">ورود | ثبت نام</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
                <TextInput<SignIn>
                    register={register}
                    name={"mobile"}
                    errors={errors}
                />

                <Button isLoading={isPending} type="submit" variant="primary">
                    تایید و دریافت کد
                </Button>
            </form>
        </>
    );
};

export default SignInForm;