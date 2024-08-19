import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 15"
    width={props.width}
    height={props.height}
    {...props}
  >
    <path
      fill="currentColor"
      d="m3.325 14.923 1.24-5.313L.442 6.038l5.43-.47L8 .558l2.127 5.01 5.43.47-4.123 3.571 1.24 5.313L8 12.102z"
    />
  </svg>
);
export default SvgStar;
