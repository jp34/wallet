import { Logo } from "../components/Logo";
import { Center, Box, VStack, HStack, Text, Button } from "native-base";

const StartScreen = ({ navigation }) => {
  return (
    // Page Container
    <Center
      flex="1"
      bg={{
        linearGradient: {
          colors: ["secondary", "base"],
        },
      }}
    >
      {/* Body Container */}
      <Box flex="1" safeArea alignItems="center">
        {/* Logo Container */}
        <Box flex="0.8" justifyContent="center">
          <Logo lg />
        </Box>
        {/* Button / Text Container */}
        <VStack
          flex="0.2"
          w="full"
          justifyContent="flex-end"
          space="2"
          justifyItems="center"
        >
          <Button
            variant="outline"
            colorScheme="white"
            onPress={() => navigation.navigate("Splash")}
            rounded="7"
            size="lg"
            _text={{ fontSize: "lg", color: "#EEE" }}
          >
            Get Started
          </Button>
          <HStack space="2">
            <Text color="#EEE" fontSize="md">
              Already have an account?
            </Text>
            <Text
              color="secondaryBlue.600"
              fontSize="md"
              fontWeight="semibold"
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Log In
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default StartScreen;
