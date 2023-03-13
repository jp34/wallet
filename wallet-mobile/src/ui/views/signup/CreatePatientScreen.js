import React, { useRef } from "react";
import { createPatient } from "../../../api/strapi-client";
import {
  Flex,
  Container,
  Text,
  Box,
  Pressable,
  ChevronLeftIcon,
  FormControl,
  Input,
  VStack,
  Button,
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreatePatientScreen = ({ navigation }) => {
  const fNameInp = useRef();
  const [fNameInvalid, setFNameInvalid] = React.useState(false);
  const [fName, setFName] = React.useState();
  const [fNameEM, setFNameEM] = React.useState();

  const mNameInp = useRef();
  const [mNameInvalid, setMNameInvalid] = React.useState(false);
  const [mName, setMName] = React.useState();
  const [mNameEM, setMNameEM] = React.useState();

  const lNameInp = useRef();
  const [lNameInvalid, setLNameInvalid] = React.useState(false);
  const [lName, setLName] = React.useState();
  const [lNameEM, setLNameEM] = React.useState();

  const phoneInp = useRef();
  const [phoneInvalid, setPhoneInvalid] = React.useState(false);
  const [phone, setPhone] = React.useState();
  const [phoneEM, setPhoneEM] = React.useState();

  const bdayInp = useRef();
  const [bdayInvalid, setBdayInvalid] = React.useState(false);
  const [bday, setBday] = React.useState();
  const [bdayEM, setBdayEM] = React.useState();

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
        setBdayyEM("Date of Birth incorrect format, MM/DD/YYYY.");
        setBdayInvalid("true");
      } else {
        phone.replace(/\D/g, "");
        bday.replace(/\D/g, "");
        const result = await createPatient(fName, mName, lName, phone, bday);
        if (result) return navigation.navigate("HomeRouter");
        else return;
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
      <KeyboardAwareScrollView style={{width:"100%"}} contentContainerStyle={{flex: 1}}>
        <Container safeArea maxW="390" flex="1">
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
              Patient Information
            </Text>
            <Text fontSize="lg" color="lightAccent">
              Let's get some more info.
            </Text>
          </Box>
          <Box flex="0.55" justifyContent="center" px="4" w="full">
            <VStack space={4}>
              {/* First N Form */}
              <FormControl isRequired isInvalid={fNameInvalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                >
                  First Name
                </FormControl.Label>
                <Input
                  size="2xl"
                  _input={{ color: "lightAccent" }}
                  _focus={{
                    selectionColor: "lightAccent",
                    backgroundColor: "purple.400",
                    borderColor: "purple.500",
                  }}
                  onChangeText={(text) => setFName(text)}
                  ref={fNameInp}
                  autoCorrect={false}
                  onFocus={() => setFNameInvalid(false)}
                  onSubmitEditing={() => mNameInp.current.focus()}
                  blurOnSubmit={false}
                />
                <FormControl.ErrorMessage>{fNameEM}</FormControl.ErrorMessage>
              </FormControl>
              {/* M Name Form */}
              <FormControl isRequired isInvalid={mNameInvalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                >
                  Middle Name
                </FormControl.Label>
                <Input
                  size="2xl"
                  _input={{ color: "lightAccent" }}
                  _focus={{
                    selectionColor: "lightAccent",
                    backgroundColor: "purple.400",
                    borderColor: "purple.500",
                  }}
                  onChangeText={(text) => setMName(text)}
                  ref={mNameInp}
                  autoCorrect={false}
                  onFocus={() => setMNameInvalid(false)}
                  onSubmitEditing={() => lNameInp.current.focus()}
                  blurOnSubmit={false}
                />
                <FormControl.ErrorMessage>{mNameEM}</FormControl.ErrorMessage>
              </FormControl>
              {/* L Name Form */}
              <FormControl isRequired isInvalid={lNameInvalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                >
                  Last Name
                </FormControl.Label>
                <Input
                  size="2xl"
                  _input={{ color: "lightAccent" }}
                  _focus={{
                    selectionColor: "lightAccent",
                    backgroundColor: "purple.400",
                    borderColor: "purple.500",
                  }}
                  onChangeText={(text) => setLName(text)}
                  ref={lNameInp}
                  autoCorrect={false}
                  onFocus={() => setLNameInvalid(false)}
                  onSubmitEditing={() => phoneInp.current.focus()}
                  blurOnSubmit={false}
                />
                <FormControl.ErrorMessage>{lNameEM}</FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={phoneInvalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                >
                  Phone Number
                </FormControl.Label>
                <Input
                  size="2xl"
                  placeholder="123-456-7890"
                  _input={{ color: "lightAccent" }}
                  _focus={{
                    selectionColor: "lightAccent",
                    backgroundColor: "purple.400",
                    borderColor: "purple.500",
                  }}
                  onChangeText={(text) => setPhone(text)}
                  ref={phoneInp}
                  autoCorrect={false}
                  onFocus={() => setPhoneInvalid(false)}
                  onSubmitEditing={() => bdayInp.current.focus()}
                  blurOnSubmit={false}
                />
                <FormControl.ErrorMessage>{phoneEM}</FormControl.ErrorMessage>
              </FormControl>
              <FormControl isRequired isInvalid={bdayInvalid}>
                <FormControl.Label
                  _text={{ color: "lightAccent", fontSize: "md" }}
                >
                  Date of Birth
                </FormControl.Label>
                <Input
                  size="2xl"
                  placeholder="MM / DD / YYYY"
                  _input={{ color: "lightAccent" }}
                  _focus={{
                    selectionColor: "lightAccent",
                    backgroundColor: "purple.400",
                    borderColor: "purple.500",
                  }}
                  onChangeText={(text) => setBday(text)}
                  ref={bdayInp}
                  autoCorrect={false}
                  onFocus={() => setBdayInvalid(false)}
                />
                <FormControl.ErrorMessage>{bdayEM}</FormControl.ErrorMessage>
              </FormControl>
            </VStack>
          </Box>
          <Box flex="0.2" w="full" justifyContent="flex-end">
            <Button
              variant="outline"
              colorScheme="white"
              onPress={() => attemptCreatePatient()}
              rounded="7"
              alignSelf="center"
              w="70%"
            >
              <Text color="#EEE" fontSize="lg">
                Complete
              </Text>
            </Button>
          </Box>
        </Container>
      </KeyboardAwareScrollView>
    </Flex>
  );
};

export default CreatePatientScreen;
