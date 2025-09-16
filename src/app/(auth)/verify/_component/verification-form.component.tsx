"use client";

import {useNotificationStore} from "@/lib/stores/notification.store";
import {useForm} from "react-hook-form";
import {VerifyUserModel} from "@/app/(auth)/verify/_types/verify-user.type";
import {useMemo, useRef, useState} from "react";
import {useSearchParams} from "next/navigation";
import {useSendAuthCode} from "../_api/send-auth-code";
import AuthCode from "@/ui/components/auth-code/auth-code.component";
import Link from "next/link";
import Button from "@/ui/components/button/button.component";
import {AuthCodeRef} from "@/ui/components/auth-code/auth-code.types";
import {TimerRef} from "@/ui/components/timer/timer.types";
import Timer from "@/ui/components/timer/timer.component";
import {getTwoMinutesFromNow} from "@/lib/utils/time";
import {zodResolver} from "@hookform/resolvers/zod";
import {VerifyUserSchema} from "@/app/(auth)/verify/_types/verify-user.schema";

const VerificationForm = () => {
    const showNotification = useNotificationStore(state => state.showNotification);

    const [showResendCode, setShowResendCode] = useState<boolean>(false);

    const authCodeRef = useRef<AuthCodeRef>(null);
    const timerRef = useRef<TimerRef>(null);

    const params = useSearchParams();
    const usernameFromQuery = params.get("mobile") ?? "";
    const defaultValues = useMemo<VerifyUserModel>(
        () => ({username: usernameFromQuery, code: ""}),
        [usernameFromQuery]
    );

    const {
        handleSubmit, formState: {isValid}, setValue,
    } = useForm<VerifyUserModel>({
        resolver: zodResolver(VerifyUserSchema), defaultValues,
    });

    const getNewAuthCode = useSendAuthCode({
        onSuccess: () => {
            showNotification({
                type: 'info',
                message: 'کد تایید به شماره شما ارسال شد'
            })
        }
    })
    const resendAuthCode = () => {
        timerRef.current?.restart(getTwoMinutesFromNow());
        setShowResendCode(false);
        getNewAuthCode.submit(usernameFromQuery);
        authCodeRef.current?.clear();
    }

    const onSubmit = (data: VerifyUserModel) => {
        data.username = usernameFromQuery;
        console.log(data);
    }
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

                <Button isLink={true} isDisabled={!showResendCode} onClick={resendAuthCode}>ارسال مجدد کد تایید</Button>

                <Button type="submit" variant="primary" isDisabled={!isValid}>
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