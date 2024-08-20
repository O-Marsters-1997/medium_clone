import { globalStyle } from "@vanilla-extract/css";
import { media } from "~/styles/variables.css";

globalStyle(".page-layout", {
  display: "flex",
});

globalStyle(".explore-section", {
  flex: 2.5,
});

globalStyle(".sidebar", {
  display: "none",
  flex: 1,
  "@media": {
    [media.md]: {
      display: "inline-block",
    },
  },
});
