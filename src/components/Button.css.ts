import { style, styleVariants } from "@vanilla-extract/css";
import { colors, breakpoints } from "~/styles/theme.css";

const baseButton = style({
  color: colors.text.secondary,
  borderRadius: "2.5em",
  padding: "1em",
  border: "none",
  fontSize: ".75rem",
  cursor: "pointer",
  "@media": {
    [`(min-width: ${breakpoints.sm})`]: {},
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
