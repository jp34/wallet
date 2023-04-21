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
import { login } from "../api";
import Wrapper from "../../src/components/Wrapper";

export default function LoginScreen() {
  const router = useRouter();

  const [valid, setValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const userInput = useRef(null);
  const passInput = useRef(null);

  const attemptLogin = async () => {
    if (validateForm()) {
      try {
        const result = await login(email, password);
        if (result) {
          setValid(true);
          return router.replace("home");
        } else {
          setValid(false);
          setErrorMessage("Invalid logins provided");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const validateForm = () => {
    try {
      if (!email) throw "Email is required";
      if (email.trim() === "") throw "Email is required";
      if (!password) throw "Password is required";
      if (password.trim() === "") throw "Password is required";
      setValid(true);
      return true;
    } catch (message) {
      setValid(false);
      setErrorMessage(message);
      return false;
    }
  }

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
        <FormControl isRequired isInvalid={!valid}>
          <FormControl.Label
            _text={{
              color: "#EEE",
              fontSize: "md",
            }}
          >
            Email Address
          </FormControl.Label>
          <Input
            size="xl"
            variant="primary"
            autoCorrect={false}
            onFocus={() => setValid(true)}
            onChangeText={(text) => setEmail(text)}
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
            onFocus={() => setValid(true)}
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
