import Image from "next/image";

import { styled } from "..";

export const HomeContainer = styled("main", {
  width: "100%",
  color: "white",
  bottom: "0 auto",
  height: "calc(100vh - 6.1rem)",

  display: "flex",
  alignItems: "flex-end",
  justifyContent: "space-between",
});

export const HomeContent = styled("div", {
  fontFamily: "Libre Baskerville",
  fontWeight: 400,
  textAlign: "center",
  height: "calc(100vh - 6.1rem)",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  h1: {
    fontSize: "2.5rem",
    marginBottom: "1.25rem",
  },

  p: {
    fontSize: "2rem",
    lineHeight: "3rem",

    span: {
      fontWeight: "bold",

      "&:nth-last-child(1)": {
        fontSize: "2.5rem",
        color: "$gray700",
      }
    },
  }
});

export const ImageContent = styled(Image, {
  width: "31.25rem",
  height: "41.094rem",

  "@media(max-width: 1280px)": {
    width: "80%",
    height: "80%",
  },

  "@media(max-width: 1080px)": {
    width: "70%",
    height: "70%",
  }
});