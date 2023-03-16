import { Link } from "expo-router";
import { VStack, Text, Box, Button, Heading } from "native-base";
import { Wrapper } from "../../src/components/Wrapper";

export default function SplashScreen() {
  return (
    <Wrapper>
      <VStack space={16} flex="0.9" justifyContent="center" alignItems="center">
        <Box alignItems="center">
          <Heading color="#EEE" fontSize="3xl">
            What is JustBe?
          </Heading>
          <Text color="#EEE" fontSize="xl">
            Description.
          </Text>
        </Box>
        <Box alignItems="center">
          <Heading color="#EEE" fontSize="3xl">
            How Can I Use It?
          </Heading>
          <Text color="#EEE" fontSize="xl">
            Description.
          </Text>
        </Box>
      </VStack>
      <Box flex="0.1" justifyContent="flex-end">
        <Link href="./agreement" asChild>
          <Button
            variant="primary"
            size="lg"
            _text={{ fontSize: "lg" }}
            width="70%"
            alignSelf="center"
          >
            Continue
          </Button>
        </Link>
      </Box>
    </Wrapper>
  );
}
