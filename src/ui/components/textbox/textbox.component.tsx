import {Size} from "@/lib/types/size.type";
import {TextboxProps} from "@/ui/components/textbox/textbox.types";
import classNames from "classnames";
import {forwardRef, ForwardRefRenderFunction} from "react";

const sizeClasses: Record<Size, string> = {
    tiny: "textbox xs",
    small: "textbox sm",
    normal: "textbox md",
    large: "textbox lg",
};

const TextboxWithoutRef: ForwardRefRenderFunction<HTMLInputElement, TextboxProps> = (
    ({variant = "ghost", type = "text", className, size = "normal", ...otherProps}, ref) => {
        const classes = classNames(
            "textbox",
            "w-full",
            className,
            {[`textbox ${variant}`]: variant},
            {[`${sizeClasses[size]}`]: size}
        );
        return <input ref={ref} type={type} className={classes} {...otherProps} />;
    }
);

const TextBox = forwardRef(TextboxWithoutRef);

export default TextBox;