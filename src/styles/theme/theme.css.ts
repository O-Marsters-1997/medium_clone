import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  colors: {
    bg: {
      primary: {
        main: "",
      },
      secondary: "",
      tertiary: {
        main: "",
        transparent: "",
      },
    },
    text: {
      primary: {
        main: "",
        bold: "",
      },
      secondary: "",
      muted: "",
    },
    button: {
      primary: "",
      secondary: "",
    },
    muted: {
      primary: "",
      bold: "",
    },
  },
  typograpghy: {
    heading: "",
    body: "",
  },
  utils: {
    boxShadow: "",
  },
});

export const { colors, typograpghy, utils } = vars;
