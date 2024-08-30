import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    width={props.width}
    height={props.height}
    {...props}
  >
    <path fill="currentColor" d="M14 7.998H8v6H6v-6H0v-2h6v-6h2v6h6z" />
  </svg>
);
export default SvgPlus;
