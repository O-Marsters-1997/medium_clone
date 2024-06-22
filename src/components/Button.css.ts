import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "~/styles/theme.css";
import { fontSizes, media } from "~/styles/variables.css";

const baseButton = style({
  color: colors.text.secondary,
  borderRadius: "2.5em",
  padding: ".8rem 1.25rem",
  border: "none",
  cursor: "pointer",
  width: "fit-content",
  textDecoration: "none",
  "@media": {
    [media.sm]: {},
  },
});

const buttons = {
  primary: colors.button.primary,
  secondary: colors.button.secondary,
};

export const buttonVariants = styleVariants(buttons, (buttonBg) => [
  baseButton,
  fontSizes.interactive,
  { background: buttonBg },
]);
