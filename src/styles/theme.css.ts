import { createGlobalTheme } from "@vanilla-extract/css";

export const breakpoints = {
  xxs: "0px",
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

export const colorTokens = {
  bg: {
    primary: "hsl(47,33%,95%)",
    white: "white",
    black: "black",
  },
  text: {
    primary: "black",
    secondary: "white",
  },
  button: {
    primary: "hsl(0,0%,10%)",
    secondary: "hsl(119,71%,31%)",
  },
} as const;

export const vars = createGlobalTheme("#app", {
  colors: colorTokens,
  typograpghy: {
    headings: 'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
    body: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
});

export const { colors, typograpghy } = vars;
