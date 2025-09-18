"use client";

import {useNotificationStore} from "@/lib/stores/notification.store";
import {useForm} from "react-hook-form";
import {VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";
import {useActionState, useEffect, useMemo, useRef, useState, useTransition} from "react";
import AuthCode from "@/ui/components/auth-code/auth-code.component";
import Link from "next/link";
import Button from "@/ui/components/button/button.component";
import {AuthCodeRef} from "@/ui/components/auth-code/auth-code.types";
import {TimerRef} from "@/ui/components/timer/timer.types";
import Timer from "@/ui/components/timer/timer.component";
import {getTwoMinutesFromNow} from "@/lib/utils/time";
import {zodResolver} from "@hookform/resolvers/zod";
import {VerifyUserSchema} from "@/app/(auth)/verify/_types/verify-user.schema";
import {sendAuthCode, verify} from "@/lib/actions/auth";
import {useSearchParams} from "next/navigation";
import {Problem} from "@/lib/types/http-errors.interface";

const VerificationForm = () => {
    const showNotification = useNotificationStore(state => state.showNotification);

    const params = useSearchParams();
    const mobile = params.get("mobile") ?? "";

    const [showResendCode, setShowResendCode] = useState<boolean>(false);

    const authCodeRef = useRef<AuthCodeRef>(null);
    const timerRef = useRef<TimerRef>(null);


    const defaultValues = useMemo<VerifyUserModel>(
        () => ({username: mobile, code: ""}),
        [mobile]
    );

    const {
        handleSubmit,
        formState: {isValid},
        setValue
    } = useForm<VerifyUserModel>({resolver: zodResolver(VerifyUserSchema), defaultValues});

    const [sendAuthCodeState, sendAuthCodeAction] = useActionState(sendAuthCode, null);
    const [verifyState, verifyAction] = useActionState(verify, undefined)
    const [isPending, startTransition] = useTransition();

    const resendAuthCode = () => {
        timerRef.current?.restart(getTwoMinutesFromNow());
        setShowResendCode(false);
        authCodeRef.current?.clear();
        startTransition(async () => {
            sendAuthCodeAction({mobile: mobile});
        })
    }

    const onSubmit = (data: VerifyUserModel) => {
        data.username = mobile;
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("code", data.code);
        startTransition(async () => {
            verifyAction(formData)
        })
    }

    useEffect(() => {
        if (
            sendAuthCodeState &&
            !sendAuthCodeState.isSuccess &&
            sendAuthCodeState.error
        ) {
            showNotification({
                message: sendAuthCodeState.error.detail!,
                type: "error",
            });
        } else if (sendAuthCodeState && sendAuthCodeState.isSuccess) {
            console.log(sendAuthCodeState.response);
            showNotification({
                message: "کد تایید به شماره شما ارسال شد",
                type: "info",
            });
        }
    }, [sendAuthCodeState, showNotification]);

    return (
        <>
            <h5 className="text-2xl">کد تایید</h5>
            <p className="mt-2">
                دنیای شگفت انگیز برنامه نویسی در انتظار شماست!
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-10 flex-1">
                <AuthCode
                    className="mt-10"
                    ref={authCodeRef}
                    onChange={(value) => {
                        setValue('code', value, {shouldValidate: true})
                    }}
                />

                <Timer ref={timerRef} className="my-8" size="small" onExpire={() => {
                    setShowResendCode(true)
                }} expiryTimestamp={getTwoMinutesFromNow()} showDays={true} showHours={true}/>

                <Button isLink={true} isDisabled={!showResendCode || isPending} onClick={resendAuthCode}>ارسال
                    مجدد کد تایید</Button>

                <Button type="submit" variant="primary" isLoading={isPending} isDisabled={!isValid || isPending}>
                    تایید و ادامه
                </Button>

                <div className="flex items-start gap-1 justify-center mt-auto">
                    <span>برای اصلاح شماره موبایل</span>
                    <Link className={"hover:underline text-primary"} href="/signin">اینجا</Link>
                    <span>کلیک کنید</span>
                </div>
            </form>
        </>
    );
};

export default VerificationForm;