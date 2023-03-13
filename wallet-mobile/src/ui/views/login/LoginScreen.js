import React, { useRef } from "react";
import { login } from "../../../api/strapi-client";
import { Gradients } from "../../Style";
import {
  Flex,
  VStack,
  Text,
  Button,
  Box,
  Input,
  KeyboardAvoidingView,
  FormControl,
  Pressable
} from "native-base";

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [identifier, setIdentifier] = React.useState();
  const [password, setPassword] = React.useState();
  const userInput = useRef();
  const passInput = useRef();

  const attemptLogin = async () => {
    try {
      const result = await login(identifier, password);
      if (result) return navigation.navigate("HomeRouter");
      // Handle for incorrect logins
    } catch (err) {
      console.log("Login failed");
      console.error(err);
      return false;
    }
  };

  return (
    <Flex
      flex="1"
      justifyContent="center"
      alignItems="center"
      bg={{
        linearGradient: {
          colors: Gradients.gradient1,
        },
      }}
      py="3"
    >
      <VStack flex="1" safeArea justifyContent="space-evenly">
        <KeyboardAvoidingView flex="1" behavior="padding" enabled>
          <Box flex="1" justifyContent="center">
            <VStack space="16">
              <Box>
                <Text color="#EEE" fontSize="4xl">
                  Welcome Back
                </Text>
                <Text color="#EEE" fontSize="xl">
                  Login to your account.
                </Text>
              </Box>
              <VStack space="5">
                <FormControl>
                  <Input
                    placeholder="Email Address"
                    size="2xl"
                    _input={{ color: "#EEE" }}
                    _focus={{ selectionColor: "#EEE" }}
                    onChangeText={(text) => setIdentifier(text)}
                    ref={userInput}
                    onSubmitEditing={() => passInput.current.focus()}
                  ></Input>
                </FormControl>
                <FormControl>
                  <Input
                    placeholder="Password"
                    size="2xl"
                    _input={{ color: "#EEE" }}
                    _focus={{ selectionColor: "#EEE" }}
                    onChangeText={(text) => setPassword(text)}
                    ref={passInput}
                    type={showPassword ? "text" : "password"}
                    InputRightElement={
                      <Pressable onPress={() => setShowPassword(!showPassword)}>
                      </Pressable>
                    }
                  ></Input>
                </FormControl>
              </VStack>
            </VStack>
          </Box>
        </KeyboardAvoidingView>
        <Button
          variant="outline"
          colorScheme="white"
          onPress={() => attemptLogin()}
          rounded="7"
        >
          <Text color="#EEE" fontSize="lg">
            Log In
          </Text>
        </Button>
      </VStack>
    </Flex>
  );
};

export default LoginScreen;
