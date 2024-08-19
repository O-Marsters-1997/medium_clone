import { createTheme } from "@vanilla-extract/css";
import { colorPalette } from "~/styles/variables.css";
import { fonts } from "~/styles/base/fontFace.css";
import { vars } from "~/styles/theme/theme.css";

const {
  primary,
  white,
  whiteTransparent,
  black,
  offBlack,
  btnPrimary,
  btnSecondary,
  grey,
  greyLighter,
  greyDarker,
  greyDark,
  greenPrimary,
  greyDarkest,
  gold,
} = colorPalette;

const baseStyles = {
  typograpghy: {
    heading: `${fonts.heading}, Georgia, Cambria, "Times New Roman", Times, serif`,
    body: `${fonts.body}, Roboto, Helvetica, Arial, sans-serif`,
  },
  utils: {
    boxShadow: "2px 6px 21px -2px rgba(0,0,0,0.25)",
  },
};

export const lightTheme = createTheme(vars, {
  ...baseStyles,
  colors: {
    bg: {
      primary: {
        main: white,
      },
      secondary: primary,
      tertiary: {
        main: white,
        transparent: whiteTransparent,
      },
    },
    text: {
      primary: {
        main: offBlack,
        bold: black,
      },
      secondary: white,
      muted: greyDark,
      action: { main: greenPrimary, highlight: gold },
    },
    button: {
      primary: btnPrimary,
      secondary: btnSecondary,
    },
    muted: {
      primary: grey,
      lighter: greyLighter,
      darker: greyDarker,
    },
  },
});

export const darkTheme = createTheme(vars, {
  ...baseStyles,
  colors: {
    bg: {
      primary: {
        main: white,
      },
      secondary: primary,
      tertiary: {
        main: white,
        transparent: whiteTransparent,
      },
    },
    text: {
      primary: {
        main: offBlack,
        bold: black,
      },
      secondary: white,
      muted: greyDark,
      action: {
        main: greenPrimary,
        highlight: gold,
      },
    },
    button: {
      primary: btnPrimary,
      secondary: btnSecondary,
    },
    muted: {
      primary: grey,
      lighter: greyLighter,
      darker: greyDarker,
    },
  },
});

export const unauthedTheme = createTheme(vars, {
  ...baseStyles,
  colors: {
    bg: {
      primary: {
        main: primary,
      },
      secondary: black,
      tertiary: {
        main: white,
        transparent: whiteTransparent,
      },
    },
    text: {
      primary: {
        main: offBlack,
        bold: black,
      },
      secondary: white,
      muted: greyDark,
      action: {
        main: greenPrimary,
        highlight: gold,
      },
    },
    button: {
      primary: btnPrimary,
      secondary: btnSecondary,
    },
    muted: {
      primary: grey,
      lighter: greyLighter,
      darker: greyDarker,
    },
  },
});
