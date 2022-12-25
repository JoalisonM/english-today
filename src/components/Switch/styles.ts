import * as Switch from "@radix-ui/react-switch";
import { styled } from "../../styles";

export const SwitchContainer = styled("div", {
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  justifyContent: "center",
});

export const SwitchRoot = styled(Switch.Root, {
  all: "unset",
  width: 62,
  height: 21,
  backgroundColor: "$gray700",
  borderRadius: "9999px",
  position: "relative",
  WebkitTapHighlightColor: "$gray700",
  "&:focus": { boxShadow: "0 0 0 2px white" },
  "&[data-state='checked']": { backgroundColor: "$gray700" },
});

export const SwitchThumb = styled(Switch.Thumb, {
  display: "block",
  width: 31,
  height: 17,
  backgroundColor: "white",
  borderRadius: "9999px",
  boxShadow: "0 2px 2px $gray700",
  transition: "transform 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  "&[data-state='checked']": { transform: "translateX(29px)" },
});