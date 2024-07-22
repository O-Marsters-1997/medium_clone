import { globalStyle } from "@vanilla-extract/css";
import { typograpghy } from "~/styles/theme/theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("body", {
  margin: 0,
  fontSize: "12px",
  fontFamily: typograpghy.body,
});
