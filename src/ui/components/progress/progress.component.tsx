"use client";

import { Size } from "@/lib/types/size.type";
import { ProgressProps } from "./progress.types";
import classNames from "classnames";
import { useEffect, useState } from "react";


const sizeClasses: Record<Size, string> = {
    tiny: "progress xs",
    small: "progress sm",
    normal: "progress md",
    large: "progress lg",
};

const Progress: React.FC<ProgressProps> = ({
    value = 50,
    className,
    variant = 'neutral',
    size = 'small',
}) => {
    const classes = classNames(
        'progress',
        className,
        { [`progress ${variant}`]: variant },
        { [`${sizeClasses[size]}`]: size },
    );
    
    return (
        <progress value={value} max="100" className={classes} />
    );
}

export default Progress;