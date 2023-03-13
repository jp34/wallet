import { Gradients } from "../Style";
import { LargeLogo } from "../components/Logos";
import { Flex, Box, VStack, HStack, Text, Button } from "native-base";

const StartScreen = ({ navigation }) => {
  return (
    // Page Container
    <Flex
      flex="1"
      justifyContent="center"
      alignItems="center"
      bg={{
        linearGradient: {
          colors: ["violet.900", "violet.600"],
        },
      }}
      py="3"
    >
      {/* Screen Container */}
      <VStack
        flex="1"
        safeArea
        alignItems="center"
        justifyContent="space-evenly"
      >
        {/* Logo Container */}
        <Box flex="1" justifyContent="center">
          <LargeLogo />
        </Box>
        {/* Button / Text Container */}
        <VStack space="2">
          <Button
            variant="outline"
            colorScheme="white"
            onPress={() => {
              navigation.navigate("Splash");
            }}
            rounded="7"
          >
            <Text color="#EEE" fontSize="xl" >Get Started</Text>
          </Button>
          <HStack justifyContent="center" alignItems="center" space="1">
            <Text color="#EEE" fontSize="sm">
              Already have an account?
            </Text>
            <Text
              color="info.500"
              fontSize="sm"
              onPress={() => {navigation.navigate("Login");
              }}
            >
              Log In
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default StartScreen;
