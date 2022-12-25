import { createStitches } from "@stitches/react";

export const {
  css,
  theme,
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",

      gray100: "#F0F0F0",
      gray200: "#E5E5E5",
      gray700: "#7380A8",
      gray900: "#11111E",

      blue300: "#AFD1DC",
      orange500: "#EE9C7A",
    },
    fontSizes: {},
  }
});