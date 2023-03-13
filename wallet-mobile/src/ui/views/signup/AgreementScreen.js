import React from "react";
import {
  Flex,
  Container,
  Pressable,
  ChevronLeftIcon,
  Text,
  Box,
  ScrollView,
  Checkbox,
  Button,
} from "native-base";

const AgreementScreen = ({ navigation }) => {
  const [confirm, setConfirm] = React.useState(false);

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
        <Pressable
          onPress={() => navigation.goBack()}
          flex="0.05"
          justifyContent="center"
        >
          {/* Navigation Icon */}
          <ChevronLeftIcon color="lightAccent" size="lg" />
        </Pressable>
        <Box flex="0.2" justifyContent="center" px="4">
          <Text fontSize="2xl" color="lightAccent">
            Terms & Conditions
          </Text>
          <Text fontSize="lg" color="lightAccent">
            Please read and accept the terms.
          </Text>
        </Box>
        <Box
          flex="0.5"
          justifyContent="center"
          alignItems="center"
          rounded="30"
          py="3"
          px="4"
          shadow="9"
          bgColor="lightAccent"
        >
          <ScrollView>
            <Text color="purple.800" fontWeight="medium" fontSize="lg">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum."
            </Text>
          </ScrollView>
        </Box>
        <Box flex="0.15" justifyContent="center" w="full" alignItems="center">
          <Checkbox
            size="md"
            mt="4"
            onChange={(value) => setConfirm(value)}
            colorScheme="fuchsia"
            _text={{color: "lightAccent"}}
          >
            I agree to the terms & conditions.
          </Checkbox>
        </Box>
        <Box flex="0.1" w="full" justifyContent="flex-end">
          <Button
            variant="outline"
            colorScheme="white"
            onPress={() => confirm ? navigation.navigate("CreateAccount") : {} }
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
};

export default AgreementScreen;
