'use client'

import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_api/get-comments";
import {Comment} from "@/ui/components/comment/comment.component";

export const CourseComments = () => {
    const {slug} = useParams();
    const {data: comments} = useCourseComments({
        params: {
            slug: slug as string,
            page: 1
        }
    });
    return (
        <>
            {
                comments?.data.map((comment) => (
                    <Comment key={`comment-${comment.id}`} {...comment} variant={"info"}/>
                ))
            }
        </>
    )
}