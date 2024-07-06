import { createTheme } from "@vanilla-extract/css";
import { colorPalette } from "~/styles/variables.css";
import { fonts } from "~/styles/base/fontFace.css";
import { vars } from "~/styles/theme/theme.css";

const { primary, white, black, btnPrimary, btnSecondary } = colorPalette;

const baseStyles = {
  typograpghy: {
    heading: `${fonts.heading}, Georgia, Cambria, "Times New Roman", Times, serif`,
    body: `${fonts.body}, serif, Roboto, Helvetica, Arial, sans-serif`,
  },
};

export const lightTheme = createTheme(vars, {
  ...baseStyles,
  colors: {
    bg: {
      primary: white,
      secondary: primary,
      tertiary: "",
    },
    text: {
      primary: black,
      secondary: white,
    },
    button: {
      primary: btnPrimary,
      secondary: btnSecondary,
    },
  },
});

export const darkTheme = createTheme(vars, {
  ...baseStyles,
  colors: {
    bg: {
      primary: white,
      secondary: primary,
      tertiary: "",
    },
    text: {
      primary: black,
      secondary: white,
    },
    button: {
      primary: btnPrimary,
      secondary: btnSecondary,
    },
  },
});

export const unauthedTheme = createTheme(vars, {
  ...baseStyles,
  colors: {
    bg: {
      primary: primary,
      secondary: primary,
      tertiary: black,
    },
    text: {
      primary: black,
      secondary: white,
    },
    button: {
      primary: btnPrimary,
      secondary: btnSecondary,
    },
  },
});
