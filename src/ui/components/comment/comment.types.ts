import {ComponentBase} from "@/lib/types/component-base.type";
import {Comment} from "@/lib/types/comment.interface";

export type CommentProps = Omit<ComponentBase, "isDisabled" | "size"> & Comment