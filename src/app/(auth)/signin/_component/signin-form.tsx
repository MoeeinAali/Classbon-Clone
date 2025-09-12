"use client";


import Button from "@/ui/components/button/button.component";
import Textbox from "@/ui/components/textbox/textbox.component";
import {useForm} from "react-hook-form";
import {SignIn} from "@/app/(auth)/signin/_types/signin.interface";

const SignInForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<SignIn>();
    const onSubmit = async (data: SignIn) => {
        console.log(data)
    }
    return (
        <>
            <h5 className="text-2xl">ورود | ثبت نام</h5>
            <p className="mt-2">دنیای شگفت انگیز برنامه نویسی در انتظار شماست!</p>
            <form className="flex flex-col gap-6 mt-16" onSubmit={handleSubmit(onSubmit)}>
                <Textbox
                    {...register("mobile", {
                        required: "شماره موبایل الزامی است",
                    })}
                    type={"number"}
                    placeholder="شماره موبایل"
                />
                <Button type="submit" variant="primary">
                    تایید و دریافت کد
                </Button>
            </form>
        </>
    );
};

export default SignInForm;