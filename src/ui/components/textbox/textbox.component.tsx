import {Size} from "@/lib/types/size.type";
import {TextboxProps} from "@/ui/components/textbox/textbox.types";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
    tiny: "textbox xs",
    small: "textbox sm",
    normal: "textbox md",
    large: "textbox lg",
};

export const Textbox: React.FC<TextboxProps> = ({
                                                    variant = "ghost",
                                                    type = "text",
                                                    className,
                                                    size = "normal",
                                                    ...otherProps
                                                }) => {
    const classes = classNames(
        "textbox",
        "w-full",
        className,
        {[`textbox ${variant}`]: variant},
        {[`${sizeClasses[size]}`]: size}
    );
    return <input type={type} className={classes} {...otherProps}/>;
};

export default Textbox;