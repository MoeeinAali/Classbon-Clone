import { LoadingProps } from "./loading.types";
import classNames from "classnames";
import {Size} from "@/lib/types/size.type";

const sizeClasses: Record<Size, string> = {
    tiny: "loading-xs",
    small: "loading-sm",
    normal: "loading-md",
    large: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
                                                    type = "spinner",
                                                    variant,
                                                    size = "normal",
                                                    className,
                                                }:LoadingProps) => {

    const classes = classNames(
        "loading",
        className,
        { [`${sizeClasses[size]}`]: size },
        { [`loading-${variant}`]: variant },
        { [`loading-${type}`]: type}
    );
    return <span className={classes}></span>;
};