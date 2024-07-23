import { globalFontFace } from "@vanilla-extract/css";

const headingFont = "Noto Serif Display";
const bodyFont = "Lato";

globalFontFace(headingFont, {
  src: "url('/fonts/noto-serif-display-v24-latin-500.woff2') format('woff2'), url('/fonts/noto-serif-display-v24-latin-500.ttf') format('truetype')",
  fontWeight: "normal",
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(headingFont, {
  src: "url('/fonts/noto-serif-display-v24-latin-500italic.woff2') format('woff2'), url('/fonts/noto-serif-display-v24-latin-500italic.ttf') format('truetype')",
  fontWeight: "normal",
  fontStyle: "italic",
  fontDisplay: "swap",
});

globalFontFace(headingFont, {
  src: "url('/fonts/noto-serif-display-v24-latin-600.woff2') format('woff2'), url('/fonts/noto-serif-display-v24-latin-600.ttf') format('truetype')",
  fontWeight: 600,
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(headingFont, {
  src: "url('/fonts/noto-serif-display-v24-latin-600italic.woff2') format('woff2'), url('/fonts/noto-serif-display-v24-latin-600italic.ttf') format('truetype')",
  fontWeight: 600,
  fontStyle: "italic",
  fontDisplay: "swap",
});

globalFontFace(headingFont, {
  src: "url('/fonts/noto-serif-display-v24-latin-700.woff2') format('woff2'), url('/fonts/noto-serif-display-v24-latin-700.ttf') format('truetype')",
  fontWeight: 700,
  fontStyle: "normal",
  fontDisplay: "swap",
});

globalFontFace(headingFont, {
  src: "url('/fonts/noto-serif-display-v24-latin-700italic.woff2') format('woff2'), url('/fonts/noto-serif-display-v24-latin-700italic.ttf') format('truetype')",
  fontWeight: 700,
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
