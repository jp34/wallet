import React from "react";
import { useTheme, Center, Box } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Wrapper = ({ children, keyboard }) => {
  const theme = useTheme();
  return (
    <Center
      flex="1"
      py="2"
      bg={{
        linearGradient: {
          colors: ["secondary", "base"],
        },
      }}
      w="full"
    >
      <Box maxW="400" flex="1" w="full" px="2">
        {keyboard && (
          <KeyboardAwareScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <Box safeArea flex="1" w="full">
              {children}
            </Box>
          </KeyboardAwareScrollView>
        )}
        {!keyboard && (
          <Box safeArea flex="1" w="full">
            {children}
          </Box>
        )}
      </Box>
    </Center>
  );
};
