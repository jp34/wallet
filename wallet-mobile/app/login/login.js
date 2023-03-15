import React, { useRef } from "react";
import {
  Text,
  Button,
  Input,
  Box,
  FormControl,
  Pressable,
  Icon,
  Heading,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Wrapper } from "../../src/components/Wrapper";
import { login } from "../../src/api/strapi-client";

export default function LoginScreen() {
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
    <Wrapper keyboard>
      <Box flex="0.3" justifyContent="center" alignSelf="flex-start" px="4">
        {/* Login Headers */}
        <Heading color="#EEE" fontSize="4xl">
          Welcome Back
        </Heading>
        <Text color="#EEE" fontSize="xl">
          Login to your account.
        </Text>
      </Box>
      <Box
        flex="0.3"
        w="full"
        px="4"
        justifyContent="center"
        alignSelf="center"
      >
        {/* Login Form */}
        <FormControl isRequired isInvalid={invalid}>
          {/* Email / Username Label */}
          <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
            Email Address / Username
          </FormControl.Label>
          {/* Email / Username Input */}
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
          {/* Password Label */}
          <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }} mt="4">
            Password
          </FormControl.Label>
          {/* Password Input */}
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
          {/* Form Error Handler */}
          <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
        </FormControl>
      </Box>
      <Box flex="0.4" justifyContent="flex-end" alignItems="center">
        {/* Login Button */}
        <Button
          variant="primary"
          size="lg"
          _text={{ fontSize: "lg" }}
          onPress={() => navigation.navigate("HomeRouter")}
          w="70%"
        >
          Log In
        </Button>
      </Box>
    </Wrapper>
  );
}
