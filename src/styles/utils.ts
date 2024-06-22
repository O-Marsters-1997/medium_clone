import { style } from "@vanilla-extract/css";
import { media, spacing } from "./variables.css";

export const pagePadding = (py?: keyof typeof spacing) => {
  const paddingY = py !== undefined ? spacing[py] : spacing.s4;

  return style({
    padding: `${paddingY} ${spacing.s7}`,
    "@media": {
      [media.md]: {
        padding: `${paddingY} ${spacing.s8}`,
      },
    },
  });
};
