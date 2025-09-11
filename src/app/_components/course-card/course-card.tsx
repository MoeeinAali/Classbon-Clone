import { CourseSummary } from "@/lib/types/course-summary.interface";
import Badge from "@/ui/components/badge/badge.component";
import { IconArrowLeft, IconClock } from "@/ui/components/icons/icons";
import Price from "@/ui/components/price/price.component";
import Image from "next/image";
import Link from "next/link";

export type CourseCardProps = CourseSummary & {}

const CourseCard: React.FC<CourseCardProps> = ({
    coverImageId,
    title,
    subTitle,
    level,
    recordStatus,
    basePrice,
    duration,
    slug
}: CourseCardProps) => {
    return (
        <div className="card">
            <figure>
                <Image
                    src={`https://api.classbon.com/api/picture/${coverImageId!}`}
                    alt={title}
                    width={550}
                    height={327}
                />
            </figure>
            <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
                <Badge variant="info">{recordStatus}</Badge>
                <Badge variant="accent">{level}</Badge>
            </div>
            <div className="card body">
                <Link href={`/courses/${slug}`} className="card title">
                    {title}
                </Link>
                <p>{subTitle}</p>
                <div className="flex items-center justify-between">
                    <Badge variant="warning"> <IconClock width={16} height={16} /> {duration}</Badge>
                    <Price price={basePrice} />
                </div>
            </div>

            <Link
                className="card footer justify-center hover:bg-neutral-focus animated-icon"
                href={`/courses/${slug}`}
            >
                مشاهده جزئیات دوره
                <IconArrowLeft fill="currentColor" />
            </Link>
        </div>
    );
}

export default CourseCard;