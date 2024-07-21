import * as React from "react";
import type { SVGProps } from "react";
const SvgLightMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 240 240"
    width={props.width}
    height={props.height}
    {...props}
  >
    <path
      fill="currentColor"
      d="M112 32V8a8.001 8.001 0 0 1 16 0v24a8.001 8.001 0 0 1-13.657 5.657A8 8 0 0 1 112 32m72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 33.927-14.073A48.05 48.05 0 0 0 168 120M50.34 61.66a8.004 8.004 0 0 0 11.32-11.32l-16-16a8.004 8.004 0 0 0-11.32 11.32zm0 116.68-16 16a8.004 8.004 0 1 0 11.32 11.32l16-16a8 8 0 0 0 0-11.32 8.005 8.005 0 0 0-11.32 0M184 64a8 8 0 0 0 5.66-2.34l16-16a8.005 8.005 0 0 0-11.32-11.32l-16 16A7.999 7.999 0 0 0 184 64m5.66 114.34a8.004 8.004 0 0 0-11.32 11.32l16 16a8.004 8.004 0 0 0 11.32-11.32zM40 120a8 8 0 0 0-8-8H8a8.001 8.001 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 1 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16"
    />
  </svg>
);
export default SvgLightMode;
