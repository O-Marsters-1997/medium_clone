import * as React from "react";
import type { SVGProps } from "react";
const SvgHello = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 11 11"
    width={props.width}
    height={props.height}
    {...props}
  >
    <path
      fill="currentColor"
      d="M1.64.27 5.5 4.13 9.34.29A.92.92 0 0 1 10 0a1 1 0 0 1 .933 1.358.9.9 0 0 1-.203.302L6.84 5.5l3.89 3.89A.9.9 0 0 1 11 10a1 1 0 0 1-1 1 .92.92 0 0 1-.69-.27L5.5 6.87l-3.85 3.85A.92.92 0 0 1 1 11a1 1 0 0 1-.933-1.358.9.9 0 0 1 .203-.302L4.16 5.5.27 1.61A.9.9 0 0 1 0 1a1 1 0 0 1 1-1c.24.003.47.1.64.27"
    />
  </svg>
);
export default SvgHello;
