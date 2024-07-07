// WARNING: auto-generated
//
// Do not make manual changes to this file.
//

/*
A list of all available icons in the icon set.
*/

import React from "react";
import { sprinkles } from "~/styles/sprinkles.css";
import { StyleProps as IconProps } from "~/components/Icon";

export type IconDefinition = "search";

export const availableIcons: IconDefinition[] = ["search"];

export const IconSvg: Record<
  IconDefinition,
  ({ color, height }: IconProps) => React.ReactNode
> = {
  search: ({ color, height }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 512"
      className={sprinkles({ h: height })}
    >
      <path
        stroke={color ?? "#909090"}
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z"
      />
      <path
        stroke={color ?? "#909090"}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M338.29 338.29 448 448"
      />
    </svg>
  ),
};
