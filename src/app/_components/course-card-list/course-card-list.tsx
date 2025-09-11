import {CourseSummary} from "@/lib/types/course-summary.interface";
import CourseCard from "@/app/_components/course-card/course-card";
import { API_URL } from "@/lib/configs/global";


async function getNewestCourses(count: number): Promise<CourseSummary[]> {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch(`${API_URL}/courses/newest/${count}`,
        {
            cache: "no-store",
        }
    )
    const data: CourseSummary[] = await response.json();
    return data;
}

const CourseCardList: React.FC = async () => {
    const newestCourses = await getNewestCourses(4);

    return (
        <div className={"flex flex-wrap lg:justify-between gap-6 my-8 justify-center"}>
            {
                newestCourses.map((course) => (
                    <CourseCard key={`course-${course.slug}`} {...course} />
                ))
            }
        </div>
    );
}

export default CourseCardList;