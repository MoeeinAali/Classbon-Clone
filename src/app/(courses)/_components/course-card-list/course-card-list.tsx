import {CourseSummary} from "@/lib/types/course-summary.dto";
import CourseCard from "@/app/(courses)/_components/course-card/course-card";

export type CourseCardListProps = {
    courses: CourseSummary[]
}

const CourseCardList: React.FC<CourseCardListProps> = ({courses}: CourseCardListProps) => {
    return (
        <div className={"flex flex-wrap justify-between gap-6 my-8"}>
            {
                courses.map((course) => (
                    <CourseCard key={`course-${course.slug}`} {...course} />
                ))
            }
        </div>
    );
}

export default CourseCardList;