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
import { signup } from "../api";
import Wrapper from "../components/Wrapper";

export default function CreateAccountScreen() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const emailInp = useRef(null);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [email, setEmail] = useState("");
  const [emailEM, setEmailEM] = useState("");

  const passInp = useRef(null);
  const [passInvalid, setPassInvalid] = useState(false);
  const [pass, setPass] = useState("");
  const [passEM, setPassEM] = useState("");

  const passConfirmInp = useRef(null);
  const [passConfirmInvalid, setPassConfirmInvalid] = useState(false);
  const [passConfirm, setPassConfirm] = useState("");
  const [passConfirmEM, setPassConfirmEM] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const userRegex = /^[a-zA-Z0-9._-]{3,20}$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*[a-zA-Z]).{8,}$/;

  const attemptCreateAccount = async () => {
    if (validateEmail() && validatePassword() && validatePasswordConfirm()) {
      try {
        const result = await signup(email, pass);
        if (result) router.push("./createPatient");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const validateEmail = () => {
    try {
      if (email === "") throw "Email Address is required";
      if (email.trim() === "") throw "Email Address is required";
      if (!emailRegex.test(email)) throw "Not an email address";
      setEmailInvalid(false);
      return true;
    } catch (message) {
      setEmailEM(message);
      setEmailInvalid(true);
      return false;
    }
  };

  const validatePassword = () => {
    try {
      if (pass === "") throw "Password is required";
      if (pass.trim() === "") throw "Password is required";
      if (!passwordRegex.test(pass)) throw "Invalid Password";
      setPassInvalid(false);
      return true;
    } catch (message) {
      setPassEM(message);
      setPassInvalid(true);
      return false;
    }
  };

  const validatePasswordConfirm = () => {
    try {
      if (passConfirm === "") throw "Password confirmation is required";
      if (passConfirm.trim() === "") throw "Password confirmation is required";
      if (!passwordRegex.test(pass)) throw "Invalid Password";
      if (pass != passConfirm) throw "Passwords do not match";
      setPassConfirmInvalid(false);
      return true;
    } catch (message) {
      setPassConfirmEM(message);
      setPassConfirmInvalid(true);
      return false;
    }
  };

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

  function renderConfirmPasswordForm() {
    return (
      <FormControl isRequired isInvalid={passConfirmInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          Confirm Password
        </FormControl.Label>
        <Input
          size="xl"
          variant="primary"
          autoCorrect={false}
          onFocus={() => setPassConfirmInvalid(false)}
          onChangeText={(text) => setPassConfirm(text)}
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
        <FormControl.ErrorMessage>{passConfirmEM}</FormControl.ErrorMessage>
      </FormControl>
    );
  }

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
}
