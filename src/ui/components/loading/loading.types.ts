import {ComponentBase} from "../../../lib/types/component-base.type";

type LoadingType = 'spinner' | 'ring';

export type LoadingProps = ComponentBase & {
    type?: LoadingType;
};