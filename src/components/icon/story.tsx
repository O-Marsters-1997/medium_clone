import * as React from "react";
import type { SVGProps } from "react";
const SvgStory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 20"
    width={props.width}
    height={props.height}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2h9z"
    />
    <path
      fill="currentColor"
      d="M8 2H0a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z"
    />
    <path
      fill="currentColor"
      d="M2 14h8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
    />
  </svg>
);
export default SvgStory;
