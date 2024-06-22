import { globalStyle, style } from "@vanilla-extract/css";
import "~/styles/theme/typography.css";
import { colors, typograpghy } from "./theme.css";
import { colorPalette } from "./variables.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("body", {
  margin: 0,
  fontSize: "12px",
  fontFamily: typograpghy.body,
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
  link: style({
    textDecoration: "none",
    color: colors.text.primary,
  }),
};
