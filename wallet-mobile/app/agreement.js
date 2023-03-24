import { useState } from "react";
import { useRouter } from "expo-router";
import {
  Heading,
  Text,
  Box,
  ScrollView,
  Checkbox,
  Button,
  Center,
} from "native-base";
import Wrapper from "../src/components/Wrapper";

export default function AgreementScreen() {
  const router = useRouter();

  const [confirm, setConfirm] = useState(false);

  return (
    <Wrapper header onPress={() => router.back()}>
      <Box flex="0.1" justifyContent="center" px="4">
        <Heading fontSize="3xl" color="#EEE">
          Terms & Conditions
        </Heading>
        <Text fontSize="xl" color="#EEE">
          Please read and accept the terms.
        </Text>
      </Box>
      <Box flex="0.1"></Box>
      <Box flex="0.5" shadow="9" bgColor="#EEE" rounded="10" px="4">
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 4 }}
        >
          <Text color="secondary" fontSize="md" py="4">
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
          onPress={() => {
            confirm && router.push("createAccount");
          }}
        >
          Continue
        </Button>
      </Box>
    </Wrapper>
  );
}
