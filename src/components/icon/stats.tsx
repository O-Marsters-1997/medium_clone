import * as React from "react";
import type { SVGProps } from "react";
const SvgStats = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 34 34"
    width={props.width}
    height={props.height}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.538 34H0V20.4h6.538zm18.308 0h-6.538V13.6h6.538zM34 34h-6.538V5.667H34zm-18.308 0H9.154V0h6.538z"
    />
  </svg>
);
export default SvgStats;
