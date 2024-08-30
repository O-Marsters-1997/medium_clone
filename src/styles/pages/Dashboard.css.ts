import { globalStyle } from "@vanilla-extract/css";
import { responsiveStyles } from "~/styles/utils";
import { media } from "~/styles/variables.css";

globalStyle(".page-layout", {
  display: "flex",
});

globalStyle(".explore-section", {
  flex: 2,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  overflow: "hidden",
  boxSizing: "border-box",
  position: "relative",
});

globalStyle(".sidebar", {
  display: "none",
  flex: 1,
  ...responsiveStyles("md", { display: "inline-block" }),
});
