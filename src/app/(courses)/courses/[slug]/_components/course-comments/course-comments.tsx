'use client'

import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_api/get-comments";

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
                comments?.data.map((comment, index) => (<p className={"mb-8"} key={index}>{comment.commentText}</p>))
            }
        </>
    )
}