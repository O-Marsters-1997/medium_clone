import { createGlobalTheme } from "@vanilla-extract/css";
import { colorPalette } from "~/styles/variables.css";
import { fonts } from "~/styles/base/fontFace.css";

const { primary, white, bold, black, btnPrimary, btnSecondary } = colorPalette;

export const vars = createGlobalTheme("#app", {
  colors: {
    bg: {
      primary,
      white,
      black,
    },
    text: {
      primary: black,
      secondary: white,
      bold,
    },
    button: {
      primary: btnPrimary,
      secondary: btnSecondary,
    },
  },
  typograpghy: {
    heading: `${fonts.heading}, Georgia, Cambria, "Times New Roman", Times, serif`,
    body: `${fonts.body}, serif, Roboto, Helvetica, Arial, sans-serif`,
  },
});

export const { colors, typograpghy } = vars;
