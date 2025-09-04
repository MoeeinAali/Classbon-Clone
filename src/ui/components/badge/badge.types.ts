import { ComponentBase } from "@/lib/types/component-base.type";

export type BadgeProps = Omit<ComponentBase, "isDisabled"> & {
    children: React.ReactNode;
};