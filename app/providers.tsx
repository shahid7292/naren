"use client";
import { Fragment, useEffect } from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import {
  Box,
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  useColorMode,
} from "@chakra-ui/react";
import { theme } from "@/theme/index";
type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  const extendedTheme = extendTheme(theme);

  return (
    <Fragment>
      <CacheProvider>
        <ChakraProvider
          theme={extendedTheme}
          toastOptions={{
            defaultOptions: {
              duration: 9000,
              isClosable: true,
              position: "bottom-right",
            },
          }}
        >
          <ColorModeScript initialColorMode={"dark"} />
          <SetColoMode>{children}</SetColoMode>
        </ChakraProvider>
      </CacheProvider>
    </Fragment>
  );
}

const SetColoMode = ({ children }: Props) => {
  const { colorMode, setColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode !== "dark") {
      setColorMode("dark");
    }
  }, [colorMode, setColorMode]);
  return <Box>{children}</Box>;
};
