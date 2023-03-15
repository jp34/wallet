import React from "react";
import {
  Flex,
  Container,
  VStack,
  Text,
  Box,
  Button,
  Pressable,
  ChevronLeftIcon,
} from "native-base";

export default function SplashScreen() {
  return (
    // Page Container
    <Flex
      flex="1"
      bg={{
        linearGradient: {
          colors: ["violet.900", "violet.600"],
        },
      }}
      alignItems="center"
      py="3"
      px="4"
    >
      {/* Page Body */}
      <Container safeArea flex="1" w="full" maxW="390">
        {/* Navigation Header */}
        <VStack space={16} flex="0.30" justifyContent="center" px="4">
          <Box>
            <Text color="lightAccent" fontSize="2xl">
              What is JustBe?
            </Text>
            <Text color="lightAccent" fontSize="xl">
              Description.
            </Text>
          </Box>
          <Box>
            <Text color="lightAccent" fontSize="2xl">
              How Can I Use It?
            </Text>
            <Text color="lightAccent" fontSize="xl">
              Description.
            </Text>
          </Box>
        </VStack>
        <Box flex="0.65" w="full" justifyContent="flex-end">
          <Button
            variant="outline"
            colorScheme="white"
            onPress={() => navigation.navigate("Agreement")}
            rounded="7"
            alignSelf="center"
            w="70%"
          >
            <Text color="#EEE" fontSize="lg">
              Continue
            </Text>
          </Button>
        </Box>
      </Container>
    </Flex>
  );
}
