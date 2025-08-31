import {CourseSummary} from "@/lib/types/course-summary.dto";
import Image from "next/image";

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
        <div className={"card"}>
            <figure>
                <Image src={`https://api.classbon.com/api/picture/${coverImageId}`}
                       alt={title}
                       width={512}
                       height={256}/>
            </figure>
        </div>
    );
}

export default CourseCard;