import {z} from "zod";
import {VerifyUserSchema} from "./verify-user.schema";

export type VerifyUserModel = z.infer<typeof VerifyUserSchema>