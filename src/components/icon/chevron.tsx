import * as React from "react";
import type { SVGProps } from "react";
const SvgChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 8"
    width={props.width}
    height={props.height}
    {...props}
  >
    <path fill="currentColor" d="M1.41 7.41 6 2.83l4.59 4.58L12 6 6 0 0 6z" />
  </svg>
);
export default SvgChevron;
