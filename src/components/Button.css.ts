import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "~/styles/theme.css";
import { media } from "~/styles/variables.css";

const baseButton = style({
  color: colors.text.secondary,
  borderRadius: "2.5em",
  padding: "1em",
  border: "none",
  fontSize: ".75rem",
  cursor: "pointer",
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
  { background: buttonBg },
]);
