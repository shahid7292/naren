import React from "react";
import { Box } from "@chakra-ui/react";

export type SafeViewProps = {
  children: React.ReactNode;
};

const SafeView = (props: SafeViewProps) => {
  const { children } = props;
  return (
    <Box
      pl={{
        base: "15px",
        sm: "30px",
        lg: "70px",
        xl: "calc(calc(100vw - 1200px) / 2)",
      }}
      pr={{
        base: "15px",
        sm: "30px",
        lg: "70px",
        xl: "calc(calc(100vw - 1200px) / 2)",
      }}
    >
      {children}
    </Box>
  );
};

export default SafeView;
