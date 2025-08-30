import {ComponentBase} from "@/lib/types/component-base.type";
import {ButtonHTMLAttributes} from "react";
import {LoadingBehavior} from "@/lib/types/loading-behavior.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
    & LoadingBehavior
    & ComponentBase
    & {
    isOutlined?: boolean;
    isLink?: boolean;
    isIconAnimated?: boolean;
    shape?: ButtonShape;
}

export type ButtonShape = "default" | "wide" | "full" | "square";