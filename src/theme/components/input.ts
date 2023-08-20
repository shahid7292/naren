import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const brand = definePartsStyle({
  field: {
    backgroundColor: "inherit",
    borderColor: "neutral.400",
    borderRadius: "4px",
    borderWidth: "1px",
    color: "neutral.900",
    fontWeight: 600,
    _focus: {
      border: "none",
      boxShadow: "0 0 0 2px var(--chakra-colors-blue-400)",
      transition: "box-shadow 0.2s ease-out",
    },
    _invalid: {
      border: "none",
      transition: "box-shadow 0.2s ease-out",
      boxShadow: "0 0 0 2px var(--chakra-colors-error)",
      _focus: {
        boxShadow: "0 0 0 2px var(--chakra-colors-blue-400)",
        transition: "box-shadow 0.2s ease-out",
      },
    },
    _placeholder: { color: "neutral.400", fontWeight: 500, fontSize: "16px" },
    // Styles for dark mode
    _dark: {
      borderColor: "neutral.300",
      color: "neutral.100",
      _invalid: {
        boxShadow: "0 0 0 2px var(--chakra-colors-red-400)",
        _focus: {
          boxShadow: "0 0 0 2px var(--chakra-colors-blue-400)",
          transition: "box-shadow 0.2s ease-out",
        },
      },
      _placeholder: { color: "neutral.300" },
    },
  },
});

const primary = definePartsStyle({
  field: {
    backgroundColor: "inherit",
    borderWidth: "0px",
    borderBottomWidth: "1px",
    borderBottomColor: "blackAlpha.900",
    borderRadius: "none",
    color: "neutral.900",
    fontWeight: 600,
    _focus: {
      borderBottomWidth: "2px",
      borderBottomColor: "blue.400",
      transition: "border 0.2s ease-out",
    },
    _invalid: {
      borderBottomWidth: "2px",
      borderBottomColor: "error",
      transition: "border 0.2s ease-out",
      _focus: {
        borderBottomColor: "blue.400",
        transition: "border 0.2s ease-out",
      },
    },
    _placeholder: { color: "neutral.400", fontWeight: 500, fontSize: "16px" },
    // Styles for dark mode
    _dark: {
      borderColor: "neutral.300",
      color: "neutral.100",
      _invalid: {
        borderBottomWidth: "2px",
        borderBottomColor: "error",
        transition: "border 0.2s ease-out",
        _focus: {
          borderBottomColor: "blue.400",
          transition: "border 0.2s ease-out",
        },
      },
      _placeholder: { color: "neutral.300" },
    },
  },
});

const lg = definePartsStyle({ field: { height: "3.5rem" } });

export const Input = defineMultiStyleConfig({
  variants: {
    brand,
    primary,
  },
  sizes: {
    lg,
  },
});

export const INPUT_VARIANTS = {
  BRAND: "brand",
  FILLED: "filled",
  FLUSHED: "flushed",
  PRIMARY: "primary",
  OUTLINE: "outline",
  UNSTYLED: "unstyled",
};
