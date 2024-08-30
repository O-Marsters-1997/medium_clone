import { globalStyle } from "@vanilla-extract/css";
import { colors, typograpghy } from "~/styles/theme/theme.css";
import { textVariants } from "~/styles/theme/typography.css";
import { fontSizes } from "~/styles/variables.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("body", {
  margin: 0,
  fontSize: "12px",
  fontFamily: typograpghy.body,
});

globalStyle("hr", {
  border: "none",
  height: "1px",
  background: colors.muted.primary,
});

globalStyle("a", {
  color: colors.text.primary.main,
  fontSize: fontSizes.bodySm,
  textDecoration: "none",
});
