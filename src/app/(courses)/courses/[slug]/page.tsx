import { API_URL } from "@/lib/configs/global";
import { CourseDetails } from "@/lib/types/course-details.dto";


export async function generateStaticParams() {
    const response = await fetch(`${API_URL}/courses/slugs/`);
    const slugs = await response.json();

    return (slugs as string[]).map((slug) => ({
        slug: slug
    }));

}

async function getCourse(slug: string): Promise<CourseDetails> {
    const response = await fetch(`${API_URL}/courses/${slug}`);
    const data = await response.json();
    return data;
}

export default async function CourseDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const course = await getCourse(slug);
    return <div>{course.title}</div>;
}
