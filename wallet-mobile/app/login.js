import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import {
  Text,
  Button,
  Input,
  Box,
  FormControl,
  Pressable,
  Icon,
  Center,
  Heading,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Wrapper from "../src/components/Wrapper";
import { login } from "../src/api/strapi-client";

export default function LoginScreen() {
  const router = useRouter();

  const [invalid, setInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const userInput = useRef(null);
  const passInput = useRef(null);

  const attemptLogin = async () => {
    try {
      if (identifier === undefined) {
        setErrorMessage("Email or Username is required.");
        setInvalid(true);
        return;
      } else if (identifier.trim() === "") {
        setErrorMessage("Email or Username is required.");
        setInvalid(true);
        return;
      } else if (password === undefined) {
        setErrorMessage("Password is required.");
        setInvalid(true);
        return;
      } else if (password.trim() === "") {
        setErrorMessage("Password is required.");
        setInvalid(true);
        return;
      } else {
        const result = await login(identifier, password);
        if (result) {
          setInvalid(false);
          return router.push("");
        } else {
          setErrorMessage("Email / Username or Password is incorrect.");
          setInvalid(true);
        }
      }
    } catch (err) {
      console.error(err);
      return;
    }
  };

  return (
    <Wrapper keyboard header onPress={() => router.back()}>
      <VStack flex="0.9" justifyContent="center" space={10} px="4">
        <Box justifyContent="center">
          <Heading color="#EEE" fontSize="4xl">
            Welcome Back
          </Heading>
          <Text color="#EEE" fontSize="xl">
            Login to your account.
          </Text>
        </Box>
        <Center>
          <FormControl isRequired isInvalid={invalid}>
            <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
              Email Address / Username
            </FormControl.Label>
            <Input
              size="2xl"
              variant="primary"
              onChangeText={(text) => setIdentifier(text)}
              ref={userInput}
              autoCorrect={false}
              onFocus={() => setInvalid(false)}
              onSubmitEditing={() => passInput.current.focus()}
              blurOnSubmit={false}
            />
            <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }} mt="4">
              Password
            </FormControl.Label>
            <Input
              size="2xl"
              py="3"
              _input={{ color: "#EEE" }}
              _focus={{
                selectionColor: "#EEE",
                backgroundColor: "secondaryViolet.600",
                borderColor: "secondaryViolet.700",
              }}
              onFocus={() => setInvalid(false)}
              onChangeText={(text) => setPassword(text)}
              ref={passInput}
              type={showPassword ? "text" : "password"}
              autoCorrect={false}
              InputRightElement={
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    as={Ionicons}
                    name={showPassword ? "eye-outline" : "eye-off-outline"}
                    color="#EEE"
                    size="lg"
                    mr="3"
                  />
                </Pressable>
              }
              _hover={{ borderColor: "secondaryViolet.700" }}
            />
            <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
          </FormControl>
        </Center>
      </VStack>
      <Box flex="0.1" justifyContent="flex-end">
        <Button
          variant="primary"
          size="lg"
          _text={{ fontSize: "lg" }}
          w="70%"
          alignSelf="center"
        >
          Log In
        </Button>
      </Box>
    </Wrapper>
  );
}
