import React, { useRef } from "react";
import { login } from "../../../api/strapi-client";
import {
  Flex,
  Text,
  Button,
  Box,
  Input,
  KeyboardAvoidingView,
  FormControl,
  Pressable,
  Container,
  Icon,
  ChevronLeftIcon,
  ScrollView,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

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
      <Container safeArea width="full" maxWidth="390" flex="1">
        <Pressable onPress={() => navigation.goBack()} flex="0.05">
          <ChevronLeftIcon color="white" size="md" />
        </Pressable>
        <KeyboardAvoidingView flex="0.95" width="full" behavior="height">
          <ScrollView contentContainerStyle={{flex: 1, justifyContent: "center"}} >
            <Box>
              <Text color="lightAccent" fontSize="4xl">
                Welcome Back
              </Text>
              <Text color="lightAccent" fontSize="xl">
                Login to your account.
              </Text>
              <FormControl pt="12" isRequired isInvalid={invalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                >
                  Email Address / Username
                </FormControl.Label>
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
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                  mt="4"
                >
                  Password
                </FormControl.Label>
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
                <FormControl.ErrorMessage>
                  {errorMessage}
                </FormControl.ErrorMessage>
              </FormControl>
              <Button
                variant="outline"
                colorScheme="white"
                onPress={() => attemptLogin()}
                rounded="7"
                alignSelf="center"
                mt="12"
                width="1/2"
              >
                <Text color="#EEE" fontSize="lg">
                  Log In
                </Text>
              </Button>
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    </Flex>
  );
};

export default LoginScreen;
