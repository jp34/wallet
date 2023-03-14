import { Logo } from "../components/Logo";
import { Center, Box, VStack, HStack, Text, Button } from "native-base";

export default function StartScreen({ navigation }) {
  return (
    // Page Container
    <Center
      flex="1"
      py="2"
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
        <VStack flex="0.2" w="full" justifyContent="flex-end" space="2">
          {/* Sign Up Button */}
          <Button
            variant="primary"
            size="lg"
            _text={{ fontSize: "lg" }}
            onPress={() => navigation.navigate("Splash")}
          >
            Get Started
          </Button>
          {/* Login Helper Text / Link */}
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
}
