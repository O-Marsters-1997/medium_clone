import { globalFontFace } from "@vanilla-extract/css";

const headingFont = "Playfair Display";
const bodyFont = "Lato";

globalFontFace(headingFont, {
  src: "url('/fonts/playfair-display-600.woff2') format('woff2'), url('/fonts/playfair-display-600.ttf') format('truetype')",
  fontWeight: "normal",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(headingFont, {
  src: "url('/fonts/playfair-display-600italic.woff2') format('woff2'), url('/fonts/playfair-display-600italic.ttf') format('truetype')",
  fontWeight: "normal",
  fontStyle: "italic",
  fontDisplay: "swap",
});

globalFontFace(headingFont, {
  src: "url('/fonts/playfair-display-700.woff2') format('woff2'), url('/fonts/playfair-display-700.ttf') format('truetype')",
  fontWeight: "bold",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(headingFont, {
  src: "url('/fonts/playfair-display-700italic.woff2') format('woff2'), url('/fonts/playfair-display-700italic.ttf') format('truetype')",
  fontWeight: "normal",
  fontStyle: "italic",
  fontDisplay: "swap",
});

globalFontFace(bodyFont, {
  src: "url('/fonts/lato-regular.woff2') format('woff2'), url('/fonts/lato-regular.ttf') format('truetype')",
  fontWeight: "normal",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(bodyFont, {
  src: "url('/fonts/lato-italic.woff2') format('woff2'), url('/fonts/lato-italic.ttf') format('truetype')",
  fontWeight: "normal",
  fontStyle: "italic",
  fontDisplay: "swap",
});

globalFontFace(bodyFont, {
  src: "url('/fonts/lato-700.woff2') format('woff2'), url('/fonts/lato-700.ttf') format('truetype')",
  fontWeight: "bold",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(bodyFont, {
  src: "url('/fonts/lato-700italic.woff2') format('woff2'), url('/fonts/lato-700italic.ttf') format('truetype')",
  fontWeight: "normal",
  fontStyle: "italic",
  fontDisplay: "swap",
});

export const fonts = {
  heading: headingFont,
  body: bodyFont,
};
