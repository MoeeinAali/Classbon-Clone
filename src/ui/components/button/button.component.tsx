import {Size} from "@/lib/types/size.type";
import {ButtonProps, ButtonShape} from "@/ui/components/button/button.types";
import classNames from "classnames";
import {Loading} from "@/ui/components/loading/loading.component";

const sizeClasses: Record<Size, string> = {
    'large': 'btn-lg',
    'small': 'btn-sm',
    'tiny': 'btn-xs',
    'normal': '',
}

const shapeClasses: Record<ButtonShape, string> = {
    wide: "btn-wide",
    full: "btn-block",
    square: "btn-square",
    default: "",
};


export const Button: React.FC<ButtonProps> = ({
                                                  variant,
                                                  size = "normal",
                                                  isDisabled = false,
                                                  isOutlined = false,
                                                  shape = "default",
                                                  isLoading = false,
                                                  loadingType = "spinner",
                                                  loadingText = "در حال ارسال درخواست...",
                                                  type = "button",
                                                  isLink = false,
                                                  isIconAnimated = false,
                                                  className,
                                                  children,
                                                  ...restProps
                                              }: ButtonProps) => {
    const classes = classNames(
        "btn",
        className,
        {[`btn-${variant}`]: variant},
        {[`${sizeClasses[size]}`]: size},
        {"btn-outline": isOutlined},
        {"btn-link": isLink},
        {[`${shapeClasses[shape]}`]: shape},
        {"animated-icon": isIconAnimated},
        {"pointer-events-none opacity-80": isLoading}
    );

    return (
        <button type={type} disabled={isDisabled} className={classes} {...restProps}>
            {isLoading && <Loading type={loadingType}/>}
            {isLoading ? loadingText : children}
        </button>
    )
}

export default Button;