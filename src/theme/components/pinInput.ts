import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  textAlign: "center",
});

const sizes = {
  lg: defineStyle({
    w: 20,
    h: "3.5rem",
  }),
};

export const PinInput = defineStyleConfig({
  baseStyle,
  sizes,
  variants: {},
  defaultProps: {},
});
