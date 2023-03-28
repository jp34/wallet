import { Link, useRouter } from "expo-router";
import {
  VStack,
  Text,
  Box,
  Button,
  Heading,
  Pressable,
  ChevronLeftIcon,
} from "native-base";
import Wrapper from "../../src/components/Wrapper";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <Wrapper>
      <Box flex="0.1" justifyContent="flex-start">
        <Pressable onPress={() => router.back()}>
          <ChevronLeftIcon color="#EEE" size="lg" />
        </Pressable>
      </Box>
      <VStack space={"12"} flex="0.8" justifyContent="center">
        <Box alignItems="center">
          <Heading color="#EEE" fontSize="2xl">
            What is JustBe?
          </Heading>
          <Text color="#EEE" fontSize="xl">
            Description.
          </Text>
        </Box>
        <Box alignItems="center">
          <Heading color="#EEE" fontSize="2xl">
            How Can I Use It?
          </Heading>
          <Text color="#EEE" fontSize="xl">
            Description.
          </Text>
        </Box>
      </VStack>
      <Box flex="0.1" alignItems="center" justifyContent="flex-end">
        <Link href="./agreement" asChild>
          <Button
            variant="primary"
            _text={{
              fontSize: "lg",
            }}
            w="70%"
          >
            Continue
          </Button>
        </Link>
      </Box>
    </Wrapper>
  );
}
