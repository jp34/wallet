import React, { useRef } from "react";
import { createAccount } from "../../../api/strapi-client";
import {
  Flex,
  Container,
  Text,
  Box,
  Pressable,
  ChevronLeftIcon,
  FormControl,
  Input,
  Icon,
  VStack,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateAccountScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  const emailInp = useRef();
  const [emailInvalid, setEmailInvalid] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [emailEM, setEmailEM] = React.useState();

  const userInp = useRef();
  const [userInvalid, setUserInvalid] = React.useState(false);
  const [user, setUser] = React.useState();
  const [userEM, setUserEM] = React.useState();

  const passInp = useRef();
  const [passInvalid, setPassInvalid] = React.useState(false);
  const [pass, setPass] = React.useState();
  const [passEM, setPassEM] = React.useState();

  const passConfirmInp = useRef();
  const [passConfirmInvalid, setPassConfirmInvalid] = React.useState(false);
  const [passwordConfirm, setPasswordConfirm] = React.useState();
  const [passCEM, setPassCEM] = React.useState();

  const confirm = React.useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const userRegex = /^[a-zA-Z0-9._-]{3,20}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[a-zA-Z]).{8,}$/;

  const attemptCreateAccount = async () => {
    if (true) return navigation.navigate("CreatePatient");
    try {
      if (email === undefined) {
        setEmailEM("Email Address is required.");
        setEmailInvalid(true);
        return;
      } else if (email.trim() === "") {
        setEmailEM("Email Address is required.");
        setEmailInvalid(true);
        return;
      } else if (!emailRegex.test(email)) {
        setEmailEM("Must be a valid email address.");
        setEmailInvalid(true);
        return;
      } else if (user === undefined) {
        setUserEM("Username is required.");
        setUserInvalid(true);
        return;
      } else if (user.trim() === "") {
        setUserEM("Username is required.");
        setUserInvalid(true);
        return;
      } else if (!userRegex.test(user)) {
        setUserEM(
          "Username is invalid. Must be 3 - 20 characters. No special characters other than _, -, . or numbers."
        );
        setUserInvalid(true);
        return;
      } else if (pass === undefined) {
        setPassEM("Password is required.");
        setPassInvalid(true);
        return;
      } else if (pass.trim() === "") {
        setPassEM("Password is required.");
        setPassInvalid(true);
        return;
      } else if (!passwordRegex.test(pass)) {
        setPassEM("Invalid password.");
        setPassInvalid(true);
        return;
      } else if (passwordConfirm === undefined) {
        setPassCEM("Verify password is required.");
        setPassConfirmInvalid(true);
        return;
      } else if (passwordConfirm.trim() === "") {
        setPassCEM("Verify password is required.");
        setPassConfirmInvalid(true);
        return;
      } else if (!passwordRegex.test(passwordConfirm)) {
        setPassCEM("Invalid password.");
        setPassConfirmInvalid(true);
        return;
      } else if (pass != passwordConfirm) {
        setPassCEM("Passwords do not match.");
        setPassConfirmInvalid(true);
        return;
      } else {
        const result = await createAccount(user, email, pass, confirm);
        if (result) return navigation.navigate("CreatePatient");
        else console.log("Error");
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
          <Box flex="0.2" justifyContent="center" px="4">
            <Text fontSize="2xl" color="lightAccent">
              Create Your Account
            </Text>
            <Text fontSize="lg" color="lightAccent">
              Tell us about you.
            </Text>
          </Box>
          <Box flex="0.45" justifyContent="center" px="4" w="full">
            <VStack space={4}>
              {/* Email Address Form */}
              <FormControl isRequired isInvalid={emailInvalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                >
                  Email Address
                </FormControl.Label>
                <Input
                  size="2xl"
                  _input={{ color: "lightAccent" }}
                  _focus={{
                    selectionColor: "lightAccent",
                    backgroundColor: "purple.400",
                    borderColor: "purple.500",
                  }}
                  onChangeText={(text) => setEmail(text)}
                  ref={emailInp}
                  autoCorrect={false}
                  onFocus={() => setEmailInvalid(false)}
                  onSubmitEditing={() => userInp.current.focus()}
                  blurOnSubmit={false}
                />
                <FormControl.ErrorMessage>{emailEM}</FormControl.ErrorMessage>
              </FormControl>
              {/* User Form */}
              <FormControl isRequired isInvalid={userInvalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                >
                  Username
                </FormControl.Label>
                <Input
                  size="2xl"
                  _input={{ color: "lightAccent" }}
                  _focus={{
                    selectionColor: "lightAccent",
                    backgroundColor: "purple.400",
                    borderColor: "purple.500",
                  }}
                  onChangeText={(text) => setUser(text)}
                  ref={userInp}
                  autoCorrect={false}
                  onFocus={() => setUserInvalid(false)}
                  onSubmitEditing={() => passInp.current.focus()}
                  blurOnSubmit={false}
                />
                <FormControl.ErrorMessage>{userEM}</FormControl.ErrorMessage>
              </FormControl>
              {/* Pass Form */}
              <FormControl isRequired isInvalid={passInvalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
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
                  onChangeText={(text) => setPass(text)}
                  ref={passInp}
                  autoCorrect={false}
                  onFocus={() => setPassInvalid(false)}
                  onSubmitEditing={() => passConfirmInp.current.focus()}
                  blurOnSubmit={false}
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
                <FormControl.ErrorMessage>{passEM}</FormControl.ErrorMessage>
              </FormControl>
              {/* Pass Confirm Form */}
              <FormControl isRequired isInvalid={passConfirmInvalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                >
                  Verify Password
                </FormControl.Label>
                <Input
                  size="2xl"
                  _input={{ color: "lightAccent" }}
                  _focus={{
                    selectionColor: "lightAccent",
                    backgroundColor: "purple.400",
                    borderColor: "purple.500",
                  }}
                  onChangeText={(text) => setPasswordConfirm(text)}
                  ref={passConfirmInp}
                  autoCorrect={false}
                  onFocus={() => setPassConfirmInvalid(false)}
                  type={showPasswordConfirm ? "text" : "password"}
                  InputRightElement={
                    <Pressable
                      onPress={() =>
                        setShowPasswordConfirm(!showPasswordConfirm)
                      }
                    >
                      <Icon
                        as={Ionicons}
                        name={
                          showPasswordConfirm
                            ? "eye-outline"
                            : "eye-off-outline"
                        }
                        color="#EEE"
                        size="lg"
                        mr="3"
                      />
                    </Pressable>
                  }
                />
                <FormControl.ErrorMessage>{passCEM}</FormControl.ErrorMessage>
              </FormControl>
            </VStack>
          </Box>
          <Box flex="0.30" w="full" justifyContent="flex-end">
            <Button
              variant="outline"
              colorScheme="white"
              onPress={() => attemptCreateAccount()}
              rounded="7"
              alignSelf="center"
              w="70%"
            >
              <Text color="#EEE" fontSize="lg">
                Continue
              </Text>
            </Button>
          </Box>
        </Container>
      </KeyboardAwareScrollView>
    </Flex>
  );
};

export default CreateAccountScreen;
