'use client'

import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_api/get-comments";
import {Comment} from "@/ui/components/comment/comment.component";
import {TextPlaceholder} from "@/ui/components/placeholders";
import {Fragment, useEffect} from "react";
import {useInView} from "react-intersection-observer";

export const CourseComments = () => {
    const {ref, inView} = useInView({})
    const {slug} = useParams();

    const {data: comments, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage} = useCourseComments({
        params: {
            slug: slug as string,
            page: 1
        }
    });

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage().then();
        }
    }, [inView, fetchNextPage, hasNextPage]);

    return (
        <>
            {
                comments?.pages.map((page, index) => (
                    <Fragment key={`comment-page-${comments.pageParams?.[index] ?? index}`}>
                        {
                            page.data.map((item) => (
                                <Comment key={`comment-${item.id}`} {...item} variant={"info"}/>
                            ))
                        }
                    </Fragment>
                ))
            }
            {
                (isFetchingNextPage || hasNextPage) &&
                <div ref={ref}>
                    <TextPlaceholder count={1}/>
                </div>
            }
        </>
    )

}