import {Comment} from "@/lib/types/comment.interface";

export interface CourseCommentList {
    data: Comment[];
    nextPage: number;
}