import {Variant} from "@/lib/types/variant.type";

export interface Notification {
    id: string
    duration: number
    message: string
    type: NotificationType
}

export type NotificationType = Variant