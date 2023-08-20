import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { selectAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const brand = definePartsStyle({
  field: {
    backgroundColor: "white",
    borderColor: "neutral.900",
    borderRadius: "8px",
    borderWidth: "1px",
    color: "neutral.900",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "28px",

    _dark: {
      background: "gray.700",
      borderColor: "gray.400",
      borderWidth: "1px",
      color: "neutral.200",
    },
  },
});

const primary = definePartsStyle({
  field: {
    backgroundColor: "white",
    borderColor: "neutral.100",
    borderRadius: "8px",
    borderWidth: "2px",
    color: "neutral.900",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "20px",

    _dark: {
      background: "gray.700",
      borderColor: "gray.400",
      borderWidth: "1px",
      color: "neutral.200",
    },
  },
});
const lg = definePartsStyle({ field: { height: "56px" } });

export const Select = defineMultiStyleConfig({
  variants: {
    brand,
    primary,
  },
  sizes: {
    lg,
  },
});

export const SELECT_VARIANTS = {
  BRAND: "brand",
  FILLED: "filled",
  FLUSHED: "flushed",
  OUTLINE: "outline",
  PRIMARY: "primary",
  UNSTYLED: "unstyled",
};
