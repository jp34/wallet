import React from "react";
import {
  Heading,
  Text,
  Box,
  ScrollView,
  Checkbox,
  Button,
  Center,
} from "native-base";
import { Wrapper } from "../../src/components/Wrapper";

export default function AgreementScreen() {
  const [confirm, setConfirm] = React.useState(false);

  return (
    <Wrapper>
      <Box flex="0.3" justifyContent="center">
        <Heading fontSize="3xl" color="#EEE">
          Terms & Conditions
        </Heading>
        <Text fontSize="lg" color="#EEE">
          Please read and accept the terms.
        </Text>
      </Box>
      <Box flex="0.4" shadow="9" bgColor="#EEE" rounded="10" p="5">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text color="secondary" fontSize="md">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </Text>
        </ScrollView>
      </Box>
      <Center flex="0.2">
        <Checkbox
          size="md"
          onChange={(value) => setConfirm(value)}
          colorScheme="fuchsia"
          _text={{ color: "#EEE" }}
        >
          I agree to the terms & conditions.
        </Checkbox>
      </Center>
      <Box flex="0.1" justifyContent="flex-end">
        <Button
          variant="primary"
          size="lg"
          _text={{ fontSize: "lg" }}
          width="70%"
          alignSelf="center"
        >
          Continue
        </Button>
      </Box>
    </Wrapper>
  );
}
