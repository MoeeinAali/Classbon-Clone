import {CourseCommentList} from "@/app/(courses)/courses/[slug]/_types/course-comment.interface";
import {httpService} from "@/lib/services/http/http.service";
import {useInfiniteQuery} from "@tanstack/react-query";

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
    const {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        refetch
    } = useInfiniteQuery<CourseCommentList>({
        queryKey: ["courseComments", params.slug],
        queryFn: ({pageParam}) => getComments({params: {...params, page: pageParam as number}}),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 1,
    })

    return {
        data,
        error,
        isLoading,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
        refetch
    }
}