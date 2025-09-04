import BaseIcon from "../base-icon";
import { SvgIcon as IconTypes } from "../icon.types";

export default function SvgIcon(props:IconTypes) {
  return (
    <BaseIcon {...props}>
      <path d="M16.5 3L7.5 12.002L16.495 21"/>
    </BaseIcon>
  );
}