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
  ChevronLeftIcon,
  Pressable,
} from "native-base";
import Wrapper from "../src/components/Wrapper";

export default function AgreementScreen() {
  const router = useRouter();

  const [confirm, setConfirm] = useState(false);

  return (
    <Wrapper header onPress={() => router.back()}>
      <Box flex="0.1" justifyContent="flex-start">
        <Pressable onPress={() => router.back()}>
          <ChevronLeftIcon color="#EEE" size="lg" />
        </Pressable>
      </Box>
      <Box flex="0.1" justifyContent="center" px="4">
        <Heading fontSize="2xl" color="#EEE">
          Terms & Conditions
        </Heading>
        <Text fontSize="lg" color="#EEE">
          Please read and accept the terms.
        </Text>
      </Box>
      <Box
        flex="0.6"
        shadow="9"
        bgColor="#EEE"
        rounded="10"
        px="4"
        mx="4"
        my="6"
      >
        {renderTermsScrollView()}
      </Box>
      <Center flex="0.1">
        <Checkbox onChange={(value) => setConfirm(value)} colorScheme="fuchsia">
          <Text fontSize="md" color="#EEE">
            I agree to the terms & conditions.
          </Text>
        </Checkbox>
      </Center>
      <Box flex="0.1" alignItems="center" justifyContent="flex-end">
        <Button
          variant="primary"
          _text={{
            fontSize: "lg",
          }}
          w="70%"
          onPress={() => {
            confirm && router.push("createAccount");
          }}
        >
          Continue
        </Button>
      </Box>
    </Wrapper>
  );

  function renderTermsScrollView() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 4 }}
      >
        <Text color="secondary" fontSize="md" py="4">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </ScrollView>
    );
  }
}
