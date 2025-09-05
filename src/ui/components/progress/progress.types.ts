import { ComponentBase } from "@/lib/types/component-base.type";

export type ProgressProps = Omit<ComponentBase, 'isDisabled'> & {
    value: number;
}