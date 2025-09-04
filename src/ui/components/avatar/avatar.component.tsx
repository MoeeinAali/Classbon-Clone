import { Size } from "@/lib/types/size.type";
import { AvatarProps } from "./avatar.types";
import classNames from "classnames";
import Image from "next/image";
import { IconUserProfile } from "../icons/icons";

const sizeClasses: Record<Size, number> = {
    tiny: 40,
    small: 50,
    normal: 70,
    large: 120,
}

const Avatar: React.FC<AvatarProps> = ({
    className,
    variant = "primary",
    size = "normal",
    src,
    alt = "",
}) => {
    const classes = classNames(
        "avatar",
        { [`avatar ${variant}`]: variant },
        className,
    )
    return (
        <div className={classes} style={{ width: sizeClasses[size], height: sizeClasses[size] }}>
            {
                src ?
                    <Image src={src} alt={alt} width={sizeClasses[size]} height={sizeClasses[size]} />
                    :
                    <IconUserProfile width={sizeClasses[size] / 2} height={sizeClasses[size] / 2} />
            }
        </div>
    )
}

export default Avatar;