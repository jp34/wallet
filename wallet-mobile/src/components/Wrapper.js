import React from "react";
import { useTheme, Center, Box, Pressable, ChevronLeftIcon } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Wrapper = ({ children, keyboard, header, onPress }) => {
  const theme = useTheme();

  const renderHeader = () => (
    <Box flex="0.1" alignSelf="flex-start" justifyContent="center">
      <Pressable onPress={onPress}>
        <ChevronLeftIcon color="#EEE" size="lg" />
      </Pressable>
    </Box>
  );

  const renderContent = () => {
    if (keyboard) {
      return (
        <KeyboardAwareScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </KeyboardAwareScrollView>
      );
    }
    return <Box flex="1">{children}</Box>;
  };

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
      {header && renderHeader()}
      <Box flex={header ? "0.9" : "1"} maxW="400" w="full">
        {renderContent()}
      </Box>
    </Center>
  );
};

export default Wrapper;
