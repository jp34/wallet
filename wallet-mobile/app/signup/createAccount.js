import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import {
  Text,
  Box,
  Pressable,
  FormControl,
  Input,
  Icon,
  VStack,
  Button,
  Heading,
  ChevronLeftIcon,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { createAccount } from "../../src/api/strapi-client";
import Wrapper from "../../src/components/Wrapper";

export default function CreateAccountScreen() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const confirm = useState(true);

  const emailInp = useRef(null);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailEM, setEmailEM] = useState("");

  const userInp = useRef(null);
  const [userInvalid, setUserInvalid] = useState(false);
  const [user, setUser] = useState("");
  const [userEM, setUserEM] = useState("");

  const passInp = useRef(null);
  const [passInvalid, setPassInvalid] = useState(false);
  const [pass, setPass] = useState("");
  const [passEM, setPassEM] = useState("");

  const passConfirmInp = useRef(null);
  const [passConfirmInvalid, setPassConfirmInvalid] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passCEM, setPassCEM] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const userRegex = /^[a-zA-Z0-9._-]{3,20}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[a-zA-Z]).{8,}$/;

  const attemptCreateAccount = async () => {
    try {
      if (email === "") {
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
      } else if (user === "") {
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
      } else if (pass === "") {
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
      } else if (passwordConfirm === "") {
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
        if (result) router.push("./createPatient");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper keyboard>
      <Box flex="0.1" justifyContent="flex-start">
        <Pressable onPress={() => router.back()}>
          <ChevronLeftIcon color="#EEE" size="lg" />
        </Pressable>
      </Box>
      <Box flex="0.8" px="4" justifyContent="center">
        <Box justifyContent="center">
          <Heading fontSize="2xl" color="#EEE">
            Create Your Account
          </Heading>
          <Text fontSize="lg" color="#EEE">
            Tell us about you.
          </Text>
        </Box>
        <VStack space="md" justifyContent="center" mt="6">
          {renderEmailForm()}
          {renderUsernameForm()}
          {renderPasswordForm()}
          {renderConfirmPasswordForm()}
        </VStack>
      </Box>
      <Box flex="0.1" alignItems="center" justifyContent="flex-end">
        <Button
          variant="primary"
          _text={{
            fontSize: "lg",
          }}
          w="70%"
          onPress={() => attemptCreateAccount()}
        >
          Continue
        </Button>
      </Box>
    </Wrapper>
  );

  function renderConfirmPasswordForm() {
    return (
      <FormControl isRequired isInvalid={passConfirmInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          Verify Password
        </FormControl.Label>
        <Input
          size="xl"
          variant="primary"
          autoCorrect={false}
          onFocus={() => setPassConfirmInvalid(false)}
          onChangeText={(text) => setPasswordConfirm(text)}
          ref={passConfirmInp}
          type={showPasswordConfirm ? "text" : "password"}
          InputRightElement={
            <Pressable
              onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}
            >
              <Icon
                as={Ionicons}
                name={showPasswordConfirm ? "eye-outline" : "eye-off-outline"}
                color="#EEE"
                size="lg"
                mr="3"
              />
            </Pressable>
          }
        />
        <FormControl.ErrorMessage>{passCEM}</FormControl.ErrorMessage>
      </FormControl>
    );
  }

  function renderPasswordForm() {
    return (
      <FormControl isRequired isInvalid={passInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          Password
        </FormControl.Label>
        <Input
          size="xl"
          variant="primary"
          autoCorrect={false}
          onFocus={() => setPassInvalid(false)}
          onChangeText={(text) => setPass(text)}
          ref={passInp}
          onSubmitEditing={() => passConfirmInp.current.focus()}
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
    );
  }

  function renderUsernameForm() {
    return (
      <FormControl isRequired isInvalid={userInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          Username
        </FormControl.Label>
        <Input
          size="xl"
          variant="primary"
          autoCorrect={false}
          onFocus={() => setUserInvalid(false)}
          onChangeText={(text) => setUser(text)}
          ref={userInp}
          onSubmitEditing={() => passInp.current.focus()}
        />
        <FormControl.ErrorMessage>{userEM}</FormControl.ErrorMessage>
      </FormControl>
    );
  }

  function renderEmailForm() {
    return (
      <FormControl isRequired isInvalid={emailInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          Email Address
        </FormControl.Label>
        <Input
          size="xl"
          variant="primary"
          autoCorrect={false}
          onFocus={() => setEmailInvalid(false)}
          onChangeText={(text) => setEmail(text)}
          ref={emailInp}
          onSubmitEditing={() => userInp.current.focus()}
        />
        <FormControl.ErrorMessage>{emailEM}</FormControl.ErrorMessage>
      </FormControl>
    );
  }
}
