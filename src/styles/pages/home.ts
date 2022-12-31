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
  "@media(max-width: 1280px)": {
    width: "25rem",
    height: "32.875rem",
  },

  "@media(max-width: 768px)": {
    width: "23.75rem",
    height: "31.23125rem",
  }
});