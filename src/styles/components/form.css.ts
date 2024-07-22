import { globalStyle } from "@vanilla-extract/css";

globalStyle("input", {
  background: "transparent",
  border: "none",
});

globalStyle("input:focus", {
  outline: "none",
});
