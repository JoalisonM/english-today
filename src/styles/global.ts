import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  ":focus": {},

  body: {
    background: "linear-gradient(90deg, $blue300 0%, $orange500 140%)",
    color: "$gray900",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});