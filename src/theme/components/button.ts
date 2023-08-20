import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const brand = defineStyle({
  bg: "brand.100",
  color: "black",
  borderColor: "brand.100",
  borderRadius: "5px",
  borderWidth: "1px",
});

const brandOutline = defineStyle({
  backgroundColor: "transparent",
  color: "brand.100",
  borderColor: "brand.100",
  borderRadius: "5px",
  borderWidth: "1px",
});

const lg = defineStyle({
  height: "3.5rem",
});

export const Button = defineStyleConfig({
  //style object for base pr default style
  baseStyle: {},

  //styles for different size("sm,"md,"lg")
  sizes: {
    lg,
  },

  //styles for different visual variants("outline, solid")
  variants: {
    brand,
    "brand-outline": brandOutline,
  },

  //default values for 'size' and 'variant'
  defaultProps: {},
});

export const BUTTON_VARIANTS = {
  BRAND: "brand",
  BRAND_OUTLINE: "brand-outline",
  GHOST: "ghost",
  LINK: "link",
  OUTLINE: "outline",
  SOLID: "solid",
  UNSTYLED: "unstyled",
};
