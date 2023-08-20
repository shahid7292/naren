import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const title1 = defineStyle({
  fontWeight: "800",
  fontSize: "60px",
  lineHeight: "73px",
});
const title2 = defineStyle({
  fontWeight: "800",
  fontSize: "56px",
  lineHeight: "68px",
});
const headLine1 = defineStyle({
  fontWeight: "800",
  fontSize: "48px",
  lineHeight: "59px",
});
const headLine2 = defineStyle({
  fontWeight: "800",
  fontSize: "42px",
  lineHeight: "51px",
});
const headLine3 = defineStyle({
  fontWeight: "800",
  fontSize: "36px",
  lineHeight: "44px",
});
const headLine4 = defineStyle({
  fontWeight: "800",
  fontSize: "32px",
  lineHeight: "46px",
});
const headLine5 = defineStyle({
  fontWeight: "800",
  fontSize: "24px",
  lineHeight: "29px",
});
const subTitle1 = defineStyle({
  fontWeight: "600",
  fontSize: "24px",
  lineHeight: "29px",
});
const subTitle2 = defineStyle({
  //button1
  fontWeight: "600",
  fontSize: "20px",
  lineHeight: "24px",
});
const subTitle3 = defineStyle({
  //button2
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "20px",
});

export const Heading = defineStyleConfig({
  //style object for base pr default style
  baseStyle: {},

  //styles for different size("sm,"md,"lg")
  sizes: {},

  //styles for different visual variants("outline, solid")
  variants: {
    title1,
    title2,
    headLine1,
    headLine2,
    headLine3,
    headLine4,
    headLine5,
    subTitle1,
    subTitle2,
    subTitle3,
  },

  //default values for 'size' and 'variant'
  defaultProps: {},
});

export const HEADING_VARIANTS = {
  HEADLINE1: "headLine1",
  HEADLINE2: "headLine2",
  HEADLINE3: "headLine3",
  HEADLINE4: "headLine4",
  HEADLINE5: "headLine5",
  SUBTITLE1: "subTitle1",
  SUBTITLE2: "subTitle2",
  SUBTITLE3: "subTitle3",
  TITLE1: "title1",
  TITLE2: "title2",
};
