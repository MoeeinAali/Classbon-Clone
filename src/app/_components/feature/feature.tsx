import { FeatureProps } from "./feature.types";
import Image from 'next/image';

const Feature: React.FC<FeatureProps> = ({
    feature: { icon, title, description }
}: FeatureProps) => {
    return (
        <article className="flex flex-col items-center lg:items-start gap-4 flex-1">
            <Image src={icon} alt={title} width={52} height={52} />
            <h4 className="text-lg font-bold">{title}</h4>
            <p className="max-w-md text-lg text-center lg:text-right">{description}</p>
        </article>
    )
}

export default Feature;