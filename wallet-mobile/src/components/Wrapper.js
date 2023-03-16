import React from "react";
import { useTheme, Center, Box } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Wrapper = ({ children, keyboard }) => {
  const theme = useTheme();
  return (
    <Center
      flex="1"
      px="4"
      py="2"
      bg={{
        linearGradient: {
          colors: ["secondary", "base"],
        },
      }}
    >
      <Box flex="1" w="full" maxW="400" safeArea>
        {keyboard ? (
          <KeyboardAwareScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {children}
          </KeyboardAwareScrollView>
        ) : (
          <Box flex="1">{children}</Box>
        )}
      </Box>
    </Center>
  );
};
