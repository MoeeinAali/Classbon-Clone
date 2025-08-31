import {CourseSummary} from "@/lib/types/course-summary.dto";
import {HomeHeroSection} from "@/app/_components/home-hero-section/home-hero-section.component";


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
            <section className="container pt-20">
                <div className="text-center xl:text-right">
                    <h2 className="text-2xl font-extrabold">
                        تازه ترین دوره های آموزشی
                    </h2>
                    <p className="mt-3 text-lg">
                        برای به‌روز موندن، یاد گرفتن نکته‌های تازه ضروری‌ه!
                    </p>
                </div>
                {/*<CourseCardList courses={newestCourses}/>*/}
            </section>
        </>
    );
}
