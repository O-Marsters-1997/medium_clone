import { style, styleVariants } from "@vanilla-extract/css";
import { colors } from "~/styles/theme/theme.css";
import { fontSizes, media } from "~/styles/variables.css";

const baseButton = style({
  display: "flex",
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "1rem",
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
  outlined: colors.bg.primary.main,
};

export const buttonVariants = styleVariants({
  primary: [
    baseButton,
    {
      background: buttons.primary,
    },
  ],
  secondary: [
    baseButton,
    {
      background: buttons.secondary,
    },
  ],
  outlined: [
    baseButton,
    {
      background: buttons.outlined,
      border: `1px solid ${colors.text.primary.main}`,
      color: colors.text.primary.main,
    },
  ],
});

export const styles = {
  login: style([
    baseButton,
    {
      position: "relative",
      minWidth: "14.5rem",
      width: "100%",
      background: "transparent",
    },
  ]),
};
