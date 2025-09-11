import {Size} from "@/lib/types/size.type";
import {IconStar} from "../icons/icons";
import {RatingProps} from "./rating.types";


const sizeClasses: Record<Size, number> = {
    tiny: 14,
    small: 18,
    normal: 24,
    large: 30,
};


const Rating: React.FC<RatingProps> = ({
                                           rate,
                                           className,
                                           size = "normal",
                                           variant = "warning"
                                       }) => {

    return (
        <div className={`flex gap-1 ${className}`}>
            {
                [1, 2, 3, 4, 5].map((item) => (
                    <IconStar
                        key={`star-${item}`}
                        width={sizeClasses[size]}
                        height={sizeClasses[size]}
                        fill={rate >= item ? `var(--color-${variant})` : ''}
                        color={
                            rate >= item ? `var(--color-${variant})` : 'currentColor'
                        }
                    />
                ))
            }
        </div>
    );
}

export default Rating;