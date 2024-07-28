import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import {
  colorPalette,
  spacing,
  media,
  heightsAndWidths,
  fontSizes,
} from "~/styles/variables.css";

const baseConfig = {
  conditions: {
    xxs: { "@media": media.xxs },
    xs: { "@media": media.xs },
    sm: { "@media": media.sm },
    md: { "@media": media.md },
    lg: { "@media": media.lg },
    xl: { "@media": media.lg },
  },
  defaultCondition: "xxs",
};

const responsiveProperties = defineProperties({
  ...baseConfig,
  properties: {
    position: ["relative", "absolute"],
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
    margin: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    height: heightsAndWidths,
    width: heightsAndWidths,
    gap: spacing,
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
    m: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    mt: ["marginTop"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    ml: ["marginLeft"],
    h: ["height"],
    w: ["width"],
    pos: ["position"],
  },
});

const systemProperties = defineProperties({
  ...baseConfig,
  properties: {
    color: colorPalette,
    backgroundColor: colorPalette,
  },
  shorthands: {
    bg: ["backgroundColor"],
  },
});

const typograpghyProperties = defineProperties({
  ...baseConfig,
  properties: {
    fontFamily: ["sans-serif", "serif", "monospace"],
    fontSize: fontSizes,
    fontWeight: ["normal", "bold", 500, 600, 700],
    textDecoration: ["none", "underline"],
    textAlign: ["center", "left", "right"],
  },
  shorthands: {
    fw: ["fontWeight"],
    td: ["textDecoration"],
  },
});

export const sprinkles = createSprinkles(
  systemProperties,
  responsiveProperties,
  typograpghyProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
