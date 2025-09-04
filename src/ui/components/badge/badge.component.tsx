import { BadgeProps } from "./badge.types";
import classNames from "classnames";
import { Size } from "@/lib/types/size.type";

const sizeClasses: Record<Size, string> = {
    'large': 'badge-lg',
    'small': 'badge-sm',
    'normal': 'badge-md',
    'tiny': 'badge-xs',
}


export const Badge: React.FC<BadgeProps> = ({
    variant,
    size = "tiny",
    children,
    className
}: BadgeProps) => {

    const classes = classNames(
        "badge",
        className,
        { [`badge-${variant}`]: variant },
        { [sizeClasses[size]]: size }
    );


    return (
        <span className={classes}>
            {children}
        </span>
    )
}

export default Badge;