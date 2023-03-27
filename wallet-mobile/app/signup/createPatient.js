import { useRef, useState } from "react";
import { useRouter } from "expo-router";
import {
  Text,
  Box,
  FormControl,
  Input,
  VStack,
  Button,
  Heading,
  Pressable,
  ChevronLeftIcon,
} from "native-base";
import { createPatient } from "../../src/api/strapi-client";
import Wrapper from "../../src/components/Wrapper";

export default function CreatePatientScreen() {
  const router = useRouter();

  const fNameInp = useRef(null);
  const [fNameInvalid, setFNameInvalid] = useState(false);
  const [fName, setFName] = useState("");
  const [fNameEM, setFNameEM] = useState("");

  const mNameInp = useRef(null);
  const [mNameInvalid, setMNameInvalid] = useState(false);
  const [mName, setMName] = useState("");
  const [mNameEM, setMNameEM] = useState("");

  const lNameInp = useRef(null);
  const [lNameInvalid, setLNameInvalid] = useState(false);
  const [lName, setLName] = useState("");
  const [lNameEM, setLNameEM] = useState("");

  const phoneInp = useRef(null);
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneEM, setPhoneEM] = useState("");

  const bdayInp = useRef(null);
  const [bdayInvalid, setBdayInvalid] = useState(false);
  const [bday, setBday] = useState("");
  const [bdayEM, setBdayEM] = useState("");

  const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;
  const dateRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

  const attemptCreatePatient = async () => {
    try {
      if (fName === undefined) {
        setFNameEM("First Name is required.");
        setFNameInvalid(true);
        return;
      } else if (fName.trim() === "") {
        setFNameEM("First Name is required.");
        setFNameInvalid(true);
        return;
      } else if (mName === undefined) {
        setMNameEM("Middle Name is required.");
        setMNameInvalid(true);
        return;
      } else if (mName.trim() === "") {
        setMNameEM("Middle Name is required.");
        setMNameInvalid(true);
        return;
      } else if (lName === undefined) {
        setLNameEM("Last Name is required.");
        setLNameInvalid(true);
        return;
      } else if (lName.trim() === "") {
        setLNameEM("Last Name is required.");
        setLNameInvalid(true);
        return;
      } else if (phone === undefined) {
        setPhoneEM("Phone Number is required.");
        setPhoneInvalid(true);
        return;
      } else if (phone.trim() === "") {
        setPhoneEM("Phone Number is required.");
        setPhoneInvalid(true);
        return;
      } else if (!phoneNumberRegex.test(phone)) {
        setPhoneEM("Phone Number incorrect format, separate by dashes.");
        setPhoneInvalid("true");
        return;
      } else if (bday === undefined) {
        setBdayEM("Date of Birth is required.");
        setBdayInvalid("true");
        return;
      } else if (bday.trim() === "") {
        setBdayEM("Date of Birth is required.");
        setBdayInvalid("true");
        return;
      } else if (!dateRegex.test(bday)) {
        setBdayEM("Date of Birth incorrect format, MM/DD/YYYY.");
        setBdayInvalid("true");
      } else {
        phone.replace(/\D/g, "");
        bday.replace(/\D/g, "");
        const result = await createPatient(fName, mName, lName, phone, bday);
        if (true) router.replace("home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Wrapper keyboard header onPress={() => router.back()}>
      <Box flex="0.1" justifyContent="flex-start">
        <Pressable onPress={() => router.back()}>
          <ChevronLeftIcon color="#EEE" size="lg" />
        </Pressable>
      </Box>
      <Box flex="0.8" px="4" justifyContent="center">
        <Box justifyContent="center">
          <Heading fontSize="2xl" color="#EEE">
            Patient Information
          </Heading>
          <Text fontSize="lg" color="#EEE">
            Let's get some more info.
          </Text>
        </Box>
        <VStack space="xs" justifyContent="center" mt="4">
          {renderFirstNameInput()}
          {renderMiddleNameInput()}
          {renderLastNameInput()}
          {renderPhoneNumberInput()}
          {renderDateOfBirthInput()}
        </VStack>
      </Box>
      <Box flex="0.1" alignItems="center" justifyContent="flex-end">
        <Button
          variant="primary"
          _text={{
            fontSize: "lg",
          }}
          w="70%"
          onPress={() => attemptCreatePatient()}
        >
          Finish
        </Button>
      </Box>
    </Wrapper>
  );

  function renderDateOfBirthInput() {
    return (
      <FormControl isRequired isInvalid={bdayInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          Date of Birth
        </FormControl.Label>
        <Input
          size="xl"
          placeholder="MM / DD / YYYY"
          placeholderTextColor="#CCC"
          variant="primary"
          onChangeText={(text) => setBday(text)}
          ref={bdayInp}
          autoCorrect={false}
          onFocus={() => setBdayInvalid(false)}
        />
        <FormControl.ErrorMessage>{bdayEM}</FormControl.ErrorMessage>
      </FormControl>
    );
  }

  function renderPhoneNumberInput() {
    return (
      <FormControl isRequired isInvalid={phoneInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          Phone Number
        </FormControl.Label>
        <Input
          size="xl"
          placeholder="123-456-7890"
          placeholderTextColor="#CCC"
          variant="primary"
          onChangeText={(text) => setPhone(text)}
          ref={phoneInp}
          autoCorrect={false}
          onFocus={() => setPhoneInvalid(false)}
          onSubmitEditing={() => bdayInp.current.focus()}
          blurOnSubmit={false}
        />
        <FormControl.ErrorMessage>{phoneEM}</FormControl.ErrorMessage>
      </FormControl>
    );
  }

  function renderLastNameInput() {
    return (
      <FormControl isRequired isInvalid={lNameInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          Last Name
        </FormControl.Label>
        <Input
          size="xl"
          variant="primary"
          onChangeText={(text) => setLName(text)}
          ref={lNameInp}
          autoCorrect={false}
          onFocus={() => setLNameInvalid(false)}
          onSubmitEditing={() => phoneInp.current.focus()}
          blurOnSubmit={false}
        />
        <FormControl.ErrorMessage>{lNameEM}</FormControl.ErrorMessage>
      </FormControl>
    );
  }

  function renderMiddleNameInput() {
    return (
      <FormControl isRequired isInvalid={mNameInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          Middle Name
        </FormControl.Label>
        <Input
          size="xl"
          variant="primary"
          onChangeText={(text) => setMName(text)}
          ref={mNameInp}
          autoCorrect={false}
          onFocus={() => setMNameInvalid(false)}
          onSubmitEditing={() => lNameInp.current.focus()}
          blurOnSubmit={false}
        />
        <FormControl.ErrorMessage>{mNameEM}</FormControl.ErrorMessage>
      </FormControl>
    );
  }

  function renderFirstNameInput() {
    return (
      <FormControl isRequired isInvalid={fNameInvalid}>
        <FormControl.Label _text={{ color: "#EEE", fontSize: "md" }}>
          First Name
        </FormControl.Label>
        <Input
          size="xl"
          variant="primary"
          onChangeText={(text) => setFName(text)}
          ref={fNameInp}
          autoCorrect={false}
          onFocus={() => setFNameInvalid(false)}
          onSubmitEditing={() => mNameInp.current.focus()}
          blurOnSubmit={false}
        />
        <FormControl.ErrorMessage>{fNameEM}</FormControl.ErrorMessage>
      </FormControl>
    );
  }
}
