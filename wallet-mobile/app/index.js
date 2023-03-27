import { Link } from "expo-router";
import {
  Center,
  VStack,
  HStack,
  Text,
  Button,
  Pressable,
  Box,
} from "native-base";
import { Logo } from "../src/components/Logo";
import Wrapper from "../src/components/Wrapper";

export default function StartScreen() {
  return (
    <Wrapper>
      <Center flex="0.9">
        <Logo lg />
      </Center>
      <Box flex="0.1" alignSelf="center">
        {renderButtonFooter()}
      </Box>
    </Wrapper>
  );

  function renderButtonFooter() {
    return (
      <VStack space="2">
        <Link href="splash" asChild>
          <Button
            variant="primary"
            _text={{
              fontSize: "lg",
            }}
          >
            Get Started
          </Button>
        </Link>
        <HStack space="2">
          <Text
            color="#EEE"
            fontSize={{
              base: "md",
              sm: "sm",
              xl: "lg",
            }}
          >
            Already have an account?
          </Text>
          <Link href="login" asChild>
            <Pressable>
              <Text
                color="secondaryBlue.600"
                fontSize={{
                  base: "md",
                  sm: "sm",
                  xl: "lg",
                }}
                fontWeight="semibold"
              >
                Log In
              </Text>
            </Pressable>
          </Link>
        </HStack>
      </VStack>
    );
  }
}
