import React, { useRef } from "react";
import { login } from "../../../api/strapi-client";
import {
  Flex,
  Text,
  Button,
  Input,
  Box,
  FormControl,
  Pressable,
  Container,
  Icon,
  ChevronLeftIcon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = ({ navigation }) => {
  const [invalid, setInvalid] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);
  const [identifier, setIdentifier] = React.useState();
  const [password, setPassword] = React.useState();
  const userInput = useRef();
  const passInput = useRef();

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
          return navigation.navigate("HomeRouter");
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
      <KeyboardAwareScrollView
        style={{ width: "100%" }}
        contentContainerStyle={{ flex: 1 }}
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
        <Box flex="0.8" w="full" px="4" justifyContent="center">
            {/* Login Headers */}
            <Text color="lightAccent" fontSize="4xl">
              Welcome Back
            </Text>
            <Text color="lightAccent" fontSize="xl">
              Login to your account.
            </Text>
            {/* Login Form */}
            <FormControl pt="12" isRequired isInvalid={invalid}>
              {/* Email / Username Label */}
              <FormControl.Label
                _text={{ color: "lightAccent", fontSize: "md" }}
              >
                Email Address / Username
              </FormControl.Label>
              {/* Email / Username Input */}
              <Input
                size="2xl"
                _input={{ color: "lightAccent" }}
                _focus={{
                  selectionColor: "lightAccent",
                  backgroundColor: "purple.400",
                  borderColor: "purple.500",
                }}
                onChangeText={(text) => setIdentifier(text)}
                ref={userInput}
                autoCorrect={false}
                onFocus={() => setInvalid(false)}
                onSubmitEditing={() => passInput.current.focus()}
                blurOnSubmit={false}
              />
              {/* Password Label */}
              <FormControl.Label
                _text={{ color: "lightAccent", fontSize: "md" }}
                mt="4"
              >
                Password
              </FormControl.Label>
              {/* Password Input */}
              <Input
                size="2xl"
                _input={{ color: "lightAccent" }}
                _focus={{
                  selectionColor: "lightAccent",
                  backgroundColor: "purple.400",
                  borderColor: "purple.500",
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
              />
              {/* Form Error Handler */}
              <FormControl.ErrorMessage>
                {errorMessage}
              </FormControl.ErrorMessage>
            </FormControl>
            {/* Login Button */}
            <Button
              variant="outline"
              colorScheme="white"
              onPress={() => attemptLogin()}
              rounded="7"
              alignSelf="center"
              mt="12"
              width="70%"
            >
              <Text color="lightAccent" fontSize="lg">
                Log In
              </Text>
            </Button>
        </Box>
      </Container>
      </KeyboardAwareScrollView>
    </Flex>
  );
};

export default LoginScreen;
