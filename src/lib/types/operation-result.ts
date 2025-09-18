import {Problem} from "@/lib/types/http-errors.interface";

export type OperationResult<T> = {
    isSuccess: boolean,
    error?: Problem,
    response?: T
}