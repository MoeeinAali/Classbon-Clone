import {CourseCommentList} from "@/app/(courses)/courses/[slug]/_types/course-comment.interface";
import {httpService} from "@/lib/services/http/http.service";
import {useQuery} from "@tanstack/react-query";

type GetCommentsOptions = {
    params: {
        slug: string;
        page: number;
    }
}

const getComments = ({params}: GetCommentsOptions): Promise<CourseCommentList> => {
    const {slug, page} = params;
    const url = `/courses/${slug}/comments?page=${page}`;
    return httpService.get(url)
}

export const useCourseComments = ({params}: GetCommentsOptions) => {
    const {data} = useQuery({
        queryKey: ["courseComments"],
        queryFn: () => getComments({params})
    })

    return {data}
}