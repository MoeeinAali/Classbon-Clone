import {z} from "zod"

export const SignInSchema = z.object({
    mobile: z.string()
        .regex(/^09[0-9]{9}$/, {
            error: "شماره موبایل باید ۱۱ رقم باشد و فرمت آن صحیح باشد"
        })
})