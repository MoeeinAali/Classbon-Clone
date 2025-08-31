import {CourseSummary} from "@/lib/types/course-summary.dto";
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
                {recordStatus}
                {level}
            </div>
            <div className="card-body">
                <Link href={`/courses/${slug}`} className="card-title">
                    {title}
                </Link>
                <p>{subTitle}</p>
                <div className="flex items-center justify-between">
                    {duration}

                    {basePrice}
                </div>
            </div>

            <Link
                className="card-footer animated-icon justify-center hover:bg-neutral-focus "
                href={`/courses/${slug}`}
            >
                مشاهده جزئیات دوره
            </Link>
        </div>
    );
}

export default CourseCard;