import { ComponentBase } from "@/lib/types/component-base.type";

export type RatingProps = Omit<ComponentBase, 'isDisabled'> & {
    rate: number;
}