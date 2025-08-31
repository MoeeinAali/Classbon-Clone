import {HomeHeroSection} from "@/ui/components/home-hero-section/home-hero-section.component";
import {CourseSummary} from "@/lib/types/course-summary.dto";


async function getNewestCourses(count: number): Promise<CourseSummary[]> {
    const response = await fetch(`https://api.classbon.com/api/courses/newest/${count}`)
    const data: CourseSummary[] = await response.json();
    return data;
}

export default async function HomePage() {
    const newestCourses = await getNewestCourses(4);
    return (
        <>
            <HomeHeroSection/>
            {
                newestCourses.map((course) => (<p key={course.id}>{course.title}</p>))
            }
        </>
    );
}
