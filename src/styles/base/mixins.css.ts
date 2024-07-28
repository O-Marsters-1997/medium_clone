import { style } from "@vanilla-extract/css";

export const mixins = {
  flexWrapper: (gap: string) => {
    return style({
      gap,
    });
  },
};
