import { Size } from "@/lib/types/size.type";
import Badge from "../badge/badge.component";
import { IconToman } from "../icons/icons";
import { PriceProps } from "./price.types";

const sizeClasses: Record<Size, { textSize: string, svgSize: number }> = {
    tiny: { textSize: "text-md", svgSize: 16 },
    small: { textSize: "text-xl", svgSize: 18 },
    normal: { textSize: "text-2xl", svgSize: 20 },
    large: { textSize: "text-3xl", svgSize: 22 },
};

const Price: React.FC<PriceProps> = ({
    size = "normal",
    text = "رایگان",
    price,
    className,
}: PriceProps) => {
    const svgSize = sizeClasses[size].svgSize;
    return (
        <>
            {
                price && price > 0 ?
                    <span className={`flex items-center font-bold gap-1 text-white/90 ${sizeClasses[size].textSize}`}>
                        {price.toLocaleString()}
                        <IconToman width={svgSize} height={svgSize} strokeWidth={1} viewBox="0 0 16 16" /> </span>
                    :
                    <Badge variant="success" size="small" className={`${className}`}>
                        {text}
                    </Badge>
            }
        </>
    );
}

export default Price;