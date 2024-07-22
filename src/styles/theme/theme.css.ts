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
    },
    button: {
      primary: "",
      secondary: "",
    },
    muted: {
      primary: "",
    },
  },
  typograpghy: {
    heading: "",
    body: "",
  },
});

export const { colors, typograpghy } = vars;
