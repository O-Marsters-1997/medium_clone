import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  colors: {
    bg: {
      primary: "",
      secondary: "",
      tertiary: null,
    },
    text: {
      primary: "",
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
});

export const { colors, typograpghy } = vars;
