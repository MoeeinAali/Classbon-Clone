import {API_URL} from "@/lib/configs/global";
import {CourseDetails} from "@/lib/types/course-details.dto";
import CourseAside from "../../_components/course-aside";
import {Tab} from "@/lib/types/tab.type";
import Tabs from "@/ui/components/tab/tabs.component";
import {Accordion} from "@/ui/components/accordion/accordion.component";
import {Accordion as AccordionType} from "@/lib/types/accordion.type"

export async function generateStaticParams() {
    try {
        const response = await fetch(`${API_URL}/courses/slugs/`);
        const slugs = await response.json();

        return (slugs as string[]).map((slug) => ({
            slug: slug
        }));
    } catch {
        return [];
    }

}

async function getCourse(slug: string): Promise<CourseDetails> {
    const response = await fetch(`${API_URL}/courses/${slug}`);
    return await response.json();
}

export default async function CourseDetailPage(
    {params}: {
        params: Promise<{ slug: string }>
    }) {
    const {slug} = await params;
    const course = await getCourse(slug);

    const faqs: AccordionType[] = course.frequentlyAskedQuestions.map(faq => ({
        id: faq.id,
        title: faq.question,
        content: faq.answer
    }))

    const tabs: Tab[] = [
        {
            label: "مشخصات دوره",
            content: course.description,
        },
        {
            label: "دیدگاه‌ها و پرسش",
            content: "course comments",
        },
        {
            label: "سوالات متداول",
            content: <Accordion data={faqs}/>,
        },
    ];

    return (
        <div className="container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
            <div
                className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2 rounded-full opacity-10 blur-3xl"></div>

            <div className="col-span-10 xl:col-span-7">
                <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
                    {course.title}
                </h1>
                <h2 className="mt-4 text-center xl:text-right text-lg leading-9">
                    {course.subTitle}
                </h2>

                <div className="mt-5 min-h-screen">Video Player Component</div>
            </div>

            <div className="col-span-10 xl:col-span-3">
                <CourseAside {...course} />
            </div>

            <div className="col-span-10 xl:col-span-6">
                <Tabs tabs={tabs}/>
            </div>

            <div className="col-span-10 xl:col-span-4 bg-primary">salam</div>
        </div>
    )
}
