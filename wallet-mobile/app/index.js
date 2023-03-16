import { Link } from "expo-router";
import { Center, VStack, HStack, Text, Button, Pressable } from "native-base";
import { Logo } from "../src/components/Logo";
import { Wrapper } from "../src/components/Wrapper";

export default function StartScreen() {
  return (
    <Wrapper>
      <Center flex="0.9">
        <Logo lg />
      </Center>
      <VStack flex="0.1" justifyContent="flex-end" space="2">
        <Link href="/signup/splash" asChild>
          <Button
            variant="primary"
            size="lg"
            _text={{ fontSize: "lg" }}
            width="70%"
            alignSelf="center"
          >
            Get Started
          </Button>
        </Link>
        <HStack space="2" alignSelf="center">
          <Text color="#EEE" fontSize="md">
            Already have an account?
          </Text>
          <Link href="/login/login" asChild>
            <Pressable>
              <Text
                color="secondaryBlue.600"
                fontSize="md"
                fontWeight="semibold"
              >
                Log In
              </Text>
            </Pressable>
          </Link>
        </HStack>
      </VStack>
    </Wrapper>
  );
}
