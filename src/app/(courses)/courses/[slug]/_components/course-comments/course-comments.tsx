'use client'

import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_api/get-comments";
import {Comment} from "@/ui/components/comment/comment.component";
import {TextPlaceholder} from "@/ui/components/placeholders";

export const CourseComments = () => {
    const {slug} = useParams();
    const {data: comments, isLoading} = useCourseComments({
        params: {
            slug: slug as string,
            page: 1
        }
    });
    return (
        <>
            {
                isLoading && <TextPlaceholder count={10}/>
            }

            {
                comments?.data.map((comment) => (
                    <Comment key={`comment-${comment.id}`} {...comment} variant={"info"}/>
                ))
            }
        </>
    )

}