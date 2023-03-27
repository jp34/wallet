import { useTheme, Box } from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Wrapper = ({ children, keyboard }) => {
  const theme = useTheme();

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
    <Box
      flex="1"
      p="4"
      safeArea
      bg={{
        linearGradient: {
          colors: ["secondary", "base"],
        },
      }}
    >
      {renderContent()}
    </Box>
  );
};

export default Wrapper;
