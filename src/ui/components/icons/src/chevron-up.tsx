import BaseIcon from "../base-icon";
import { SvgIcon as IconTypes } from "../icon.types";

export default function SvgIcon(props:IconTypes) {
  return (
    <BaseIcon {...props}>
      <path d="M21 16.5L11.989 7.5L3 16.5"/>
    </BaseIcon>
  );
}