import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 20"
    width={props.width}
    height={props.height}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 1H3a2 2 0 0 0-2 2v16l6-3 6 3V3a2 2 0 0 0-2-2"
    />
  </svg>
);
export default SvgBookmark;
