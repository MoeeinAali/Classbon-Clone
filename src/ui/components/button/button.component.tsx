import {ButtonProps} from "@/ui/components/button/button.types";


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
    const classes = `btn ${variant ? 'btn-' + variant : ''} ${isIconAnimated ? 'animated-icon' : ''}`;
    return (
        <button type={type} disabled={isDisabled} className={className} {...restProps}>
            {isLoading ? loadingText : children}
        </button>
    )
}

export default Button;