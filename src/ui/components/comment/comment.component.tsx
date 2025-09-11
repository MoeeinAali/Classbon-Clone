import React from "react";
import {CommentProps} from "./comment.types";
import Avatar from "@/ui/components/avatar/avatar.component";
import {API_URL} from "@/lib/configs/global";
import Rating from "../rating/rating.component";

export const Comment: React.FC<CommentProps> = ({
                                                    userId,
                                                    fullName,
                                                    date,
                                                    commentText,
                                                    score,
                                                    isResponse,
                                                    variant = "neutral",
                                                }) => {
    return (
        <div className={`comment-container comment ${isResponse ? "end -mt-10" : "start"}`}>
            <div className="comment image">
                <Avatar
                    // src={userId ? `${API_URL}/picture/${userId}` : undefined}
                    src={isResponse ? "https://avatars.githubusercontent.com/u/118152946" : (userId ? `${API_URL}/picture/${userId}` : undefined)}
                    size="tiny"
                    variant={!isResponse ? "neutral" : variant}
                />
            </div>
            <div className="comment header">
                {fullName || (isResponse ? "معین آعلی" : "")}
                <time className="text-xs opacity-50 mx-2">{date}</time>
            </div>
            <div
                className={`comment bubble ${
                    isResponse ? variant : ""
                }`}
            >
                {commentText}
            </div>
            {score && score > 0 && (
                <div className="comment footer">
                    <Rating variant="accent" size="tiny" rate={score!}/>
                </div>
            )}
        </div>
    );
};