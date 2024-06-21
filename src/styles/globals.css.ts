import { globalStyle, style } from "@vanilla-extract/css";
import "~/styles/theme/typography.css";
import { media, spacing } from "./variables.css";
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
    position: "relative",
    background: colors.bg.primary,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  }),
  main: style({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  }),
};
