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
          colors: Gradients.gradient1,
        },
      }}
    >
      {/* Screen Container */}
      <VStack
        flex="1"
        maxWidth="400"
        safeArea
        alignItems="center"
        justifyContent="space-evenly"
        p="5"
      >
        {/* Logo Container */}
        <Box flex="1" justifyContent="center">
          <LargeLogo />
        </Box>
        {/* Button / Text Container */}
        <VStack space="2">
          <Button
            variant="outline"
            onPress={() => {
              return navigation.navigate("Splash");
            }}
            _text={{color: "#EEE", fontSize: "lg"}}
            rounded="7"
          >
            Get Started
          </Button>
          <HStack justifyContent="center" alignItems="center" space="1">
            <Text color="#EEE" fontSize="sm">Already have an account?</Text>
            <Text
              color="#2A93D5"
              fontSize="sm"
              onPress={() => {
                return navigation.navigate("Login");
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
