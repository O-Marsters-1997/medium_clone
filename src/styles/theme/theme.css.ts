import { createThemeContract } from "@vanilla-extract/css";
import { textVariants } from "~/styles/theme/typography.css";

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
        lighter: "",
        bold: "",
      },
      secondary: "",
      muted: {
        main: "",
        lighter: "",
      },
      action: { main: "", highlight: "" },
    },
    button: {
      primary: "",
      secondary: "",
    },
    muted: {
      primary: "",
      lighter: "",
      darker: "",
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
