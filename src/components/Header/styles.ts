import { styled } from "../../styles";

export const HeaderContainer = styled("header", {
  width: "100%",
  margin: "0 auto",
  maxWidth: "74.625rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  paddingBottom: "0.5rem",
  borderBottom: "1px solid $gray200",

  nav: {
    display: "flex",
    gap: "4rem",

    a: {
      fontSize: "20px",
      textDecoration: "none",
      color: "white",

      "&.active": {
        fontWeight: "bold",
      },
    }
  }
});