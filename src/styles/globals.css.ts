import { globalStyle, style } from "@vanilla-extract/css";
import "~/styles/theme/typography.css";
import { colors } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  fontSize: "12px",
});

export const styles = {
  app: style({
    background: colors.bg.primary,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  }),
  main: style({}),
};
