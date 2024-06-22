import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { colorPalette, spacing, media } from "./variables.css";

const responsiveProperties = defineProperties({
  conditions: {
    xs: { "@media": media.xs },
    sm: { "@media": media.sm },
    md: { "@media": media.md },
    lg: { "@media": media.lg },
    xl: { "@media": media.lg },
  },
  defaultCondition: "sm",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    padding: spacing,
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
  },
  shorthands: {
    // Spacing
    p: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pt: ["paddingTop"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pl: ["paddingLeft"],
  },
});

const systemProperties = defineProperties({
  conditions: {
    xs: { "@media": media.xs },
    sm: { "@media": media.sm },
    md: { "@media": media.md },
    lg: { "@media": media.lg },
    xl: { "@media": media.lg },
  },
  defaultCondition: "sm",
  properties: {
    color: colorPalette,
    backgroundColor: colorPalette,
  },
  shorthands: {
    bg: ["backgroundColor"],
  },
});

export const sprinkles = createSprinkles(
  systemProperties,
  responsiveProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
