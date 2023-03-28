import React from "react";
import { Box, Heading, Button, Center } from "native-base";
import { createWallet } from "../../src/api/strapi-client";
import Wrapper from "../../src/components/Wrapper";

export default function WalletScreen() {
  const attemptCreateWallet = async () => {
    try {
      const result = await createWallet();
      //   if (result) return navigation.navigate("Wallet");
      // Page should reload without "Start Earning" button
      // Handle for incorrect logins
    } catch (err) {
      console.log("Create account failed with error");
      console.error(err);
      return false;
    }
  };

  return (
    <Wrapper>
      <Box flex="1" px="4">
        <Box flex="0.1" justifyContent="center">
          <Heading fontSize="3xl" color="#EEE">
            Wallet
          </Heading>
        </Box>
        <Center flex="0.8" bgColor="white" rounded="15">
          <Button
            colorScheme="violet"
            w="1/2"
            rounded="10"
            size="lg"
            _text={{ fontWeight: "bold" }}
            onPress={() => attemptCreateWallet()}
          >
            Start Earning
          </Button>
        </Center>
      </Box>
    </Wrapper>
  );
}
