import { Logo } from "../../components/Logo";
import {
  Center,
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Pressable,
} from "native-base";
import { Wrapper } from "../../components/Wrapper";

export default function StartScreen({ navigation }) {
  return (
    // Page Wrapper
    <Wrapper>
      {/* Logo Container */}
      <Box flex="0.8" justifyContent="center" w="full" alignItems="center">
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
          width="70%"
          alignSelf="center"
        >
          Get Started
        </Button>
        {/* Login Helper Text / Link */}
        <HStack space="2" alignSelf="center">
          <Text color="#EEE" fontSize="md">
            Already have an account?
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text color="secondaryBlue.600" fontSize="md" fontWeight="semibold">
              Log In
            </Text>
          </Pressable>
        </HStack>
      </VStack>
    </Wrapper>
  );
}
