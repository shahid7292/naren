import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const body1 = defineStyle({
  //primary,
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "28px",
});

const body2 = defineStyle({
  //captionBold,
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "17px",
});

const label1 = defineStyle({
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "22px",
});

const label2 = defineStyle({
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "20px",
});

const caption = defineStyle({
  //subCaption
  fontWeight: "400",
  fontSize: "12px",
  lineHeight: "15px",
});

export const Text = defineStyleConfig({
  //style object for base pr default style
  baseStyle: {},

  //styles for different size("sm,"md,"lg")
  sizes: {},

  //styles for different visual variants("outline, solid")
  variants: {
    body1,
    body2,
    label1,
    label2,
    caption,
  },

  //default values for 'size' and 'variant'
  defaultProps: {},
});

export const TEXT_VARIANTS = {
  BODY1: "body1",
  BODY2: "body2",
  CAPTION: "caption",
  LABEL1: "label1",
  LABEL2: "label2",
};
