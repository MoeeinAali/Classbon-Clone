import {z} from "zod";

export const VerifyUserSchema = z.object({
    username: z.string(),
    code: z.string().length(5, {
        error: "کد فعال‌سازی باید ۵ رقم باشد"
    }),
})