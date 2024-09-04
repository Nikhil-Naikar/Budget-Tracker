"use client";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export const ChakraUiProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return(
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
};
