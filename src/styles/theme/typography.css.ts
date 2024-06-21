import { globalStyle } from "@vanilla-extract/css";
import { vars } from "~/styles/theme.css";

globalStyle("body", {
  fontFamily: vars.typograpghy.body,
});

globalStyle("h1,h2,h3,h4,h5,h6", {
  fontFamily: vars.typograpghy.headings,
});
