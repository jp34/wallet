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
  Heading,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { login } from "../src/api/strapi-client";
import Wrapper from "../src/components/Wrapper";

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
    return router.replace("/home");
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
          return router.replace("/home");
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
    <Wrapper keyboard>
      <VStack flex="0.9" justifyContent="center" space={10} px="4">
        {renderHeading()}
        {renderLoginForm()}
      </VStack>
      <Box flex="0.1" alignItems="center" justifyContent="flex-end">
        <Button
          variant="primary"
          _text={{
            fontSize: "lg",
          }}
          w="1/2"
          onPress={() => attemptLogin()}
        >
          Login
        </Button>
      </Box>
    </Wrapper>
  );

  function renderHeading() {
    return (
      <Box>
        <Heading color="#EEE" fontSize="3xl">
          Welcome Back
        </Heading>
        <Text color="#EEE" fontSize="lg">
          Login to your account.
        </Text>
      </Box>
    );
  }

  function renderLoginForm() {
    return (
      <Box>
        <FormControl isRequired isInvalid={invalid}>
          <FormControl.Label
            _text={{
              color: "#EEE",
              fontSize: "md",
            }}
          >
            Email Address / Username
          </FormControl.Label>
          <Input
            size="2xl"
            variant="primary"
            autoCorrect={false}
            onFocus={() => setInvalid(false)}
            onChangeText={(text) => setIdentifier(text)}
            ref={userInput}
            onSubmitEditing={() => passInput.current.focus()}
          />
          <FormControl.Label
            _text={{
              color: "#EEE",
              fontSize: "md",
            }}
          >
            Password
          </FormControl.Label>
          <Input
            size="2xl"
            variant="primary"
            autoCorrect={false}
            onFocus={() => setInvalid(false)}
            onChangeText={(text) => setPassword(text)}
            ref={passInput}
            type={showPassword ? "text" : "password"}
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
          />
          <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        </FormControl>
      </Box>
    );
  }
}
