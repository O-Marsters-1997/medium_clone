import { style, styleVariants } from "@vanilla-extract/css";
import { colors, typograpghy } from "~/styles/theme/theme.css";
import { fontSizes } from "../variables.css";

const baseTextStyles = {
  body: style({
    fontFamily: typograpghy.body,
  }),
  heading: style({
    fontFamily: typograpghy.heading,
    fontWeight: "normal",
  }),
};

const { body, heading } = baseTextStyles;

export const textVariants = styleVariants({
  body: [
    body,
    {
      fontSize: fontSizes.body,
    },
  ],
  bodySm: [
    body,
    {
      fontSize: fontSizes.bodySm,
    },
  ],
  bodyLg: [
    body,
    {
      fontSize: fontSizes.bodyLg,
    },
  ],
  h1: [heading, fontSizes.h1],
  h2: [
    heading,
    fontSizes.h2,
    {
      color: colors.text.primary.bold,
      fontWeight: 500,
    },
  ],
  h3: [
    body,
    fontSizes.h3,
    {
      fontWeight: "normal",
      lineHeight: "1.75rem",
    },
  ],
  h4: [
    body,
    fontSizes.h3,
    {
      fontWeight: "normal",
      lineHeight: "1.75rem",
    },
  ],
  subtitle: [body, fontSizes.subtitle],
  navLink: [body, fontSizes.interactive],
});

export const styles = {
  AuthModalTitle: style({
    fontSize: "1.75rem",
    fontWeight: "normal",
    textAlign: "center",
  }),
};
