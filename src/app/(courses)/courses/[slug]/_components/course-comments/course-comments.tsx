'use client'

import {useParams} from "next/navigation";
import {useCourseComments} from "@/app/(courses)/courses/[slug]/_api/get-comments";
import {Comment} from "@/ui/components/comment/comment.component";
import {TextPlaceholder} from "@/ui/components/placeholders";
import {Fragment, useEffect} from "react";
import {useInView} from "react-intersection-observer";
import Button from "@/ui/components/button/button.component";
import {IconRefresh} from "@/ui/components/icons/icons";
import Alert from "@/ui/components/alert/alert.component";

export const CourseComments = () => {
    const {ref, inView} = useInView({})
    const {slug} = useParams();

    const {
        data: comments,
        error,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
        refetch
    } = useCourseComments({
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

    if (error) {
        return (
            <>
                <Alert variant={"error"}>خطا در برقراری ارتباط با سرور</Alert>
                <div className={"text-center mt-3"}>
                    <Button
                        variant="neutral"
                        className={"font-semibold"}
                        isOutlined={true}
                        shape={"wide"}
                        onClick={() => refetch()}
                    >
                        <IconRefresh/>
                        تلاش مجدد
                    </Button>
                </div>
            </>
        )
    }

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
                (isFetchingNextPage || hasNextPage || isLoading) &&
                <div ref={ref}>
                    <TextPlaceholder count={1}/>
                </div>
            }
        </>
    )

}