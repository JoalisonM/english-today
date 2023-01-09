import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  ":focus": {},

  "@media(max-width: 1080px)": {
    html: {
      fontSize: "93.75%",
    }
  },

  "@media(max-width: 768px)": {
    html: {
      fontSize: "87.5%",
    }
  },

  body: {
    background: "linear-gradient(90deg, $blue300 0%, $orange500 140%)",
    color: "$gray900",
    "-webkit-font-smoothing": "antialiased",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },
});