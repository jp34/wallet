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
  ChevronLeftIcon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { login } from "../../src/api/strapi-client";
import Wrapper from "../../src/components/Wrapper";

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
          return router.replace("");
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
      <Box flex="0.1" justifyContent="flex-start">
        <Pressable onPress={() => router.back()}>
          <ChevronLeftIcon color="#EEE" size="lg" />
        </Pressable>
      </Box>
      <Box flex="0.8" justifyContent="center" px="4">
        {renderHeading()}
        {renderLoginForm()}
      </Box>
      <Box flex="0.1" alignItems="center" justifyContent="flex-end">
        <Button
          variant="primary"
          _text={{
            fontSize: "lg",
          }}
          w="70%"
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
        <Text color="#EEE" fontSize="xl">
          Login to your account.
        </Text>
      </Box>
    );
  }

  function renderLoginForm() {
    return (
      <Box mt="4">
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
            size="xl"
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
            mt="4"
          >
            Password
          </FormControl.Label>
          <Input
            size="xl"
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
