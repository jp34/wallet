import React, { useState, useRef } from "react";
import { Keyboard } from "react-native";
import {
  Pressable,
  ChevronLeftIcon,
  Box,
  Text,
  Button,
  Heading,
  VStack,
  ScrollView,
} from "native-base";
import { Link } from "expo-router";
import Wrapper from "../../src/components/Wrapper";
import TextInputFormControl from "../../src/components/InputFormControl";

export default function AllergiesIntakeScreen() {
  const allergyRef = useRef(null);
  const severityRef = useRef(null);

  const [allergies, setAllergies] = useState([]);

  async function attemptCreateAllergy() {
    try {
      // const result = await createPatientAllergy(patientId, description, severity);
      // if (result)
      //   return navigation.navigate("MedicationIntake");
      // Handle for incorrect logins
    } catch (err) {
      console.log("Create account failed with error");
      console.error(err);
      return false;
    }
  }

  const handleAddAllergy = () => {
    const allergy = allergyRef.current.getValue();
    const severity = severityRef.current.getValue();

    // Create a new object to represent the allergy and its severity
    if (allergy === "" || severity === "") return;
    const newAllergy = { allergy, severity };

    // Add the new allergy to the state array of allergies
    setAllergies([...allergies, newAllergy]);

    // Clear the input fields and hide the keyboard
    allergyRef.current.clear();
    severityRef.current.clear();
    Keyboard.dismiss();
  };

  const handleRemoveAllergy = (indexToRemove) => {
    // Create a new array of allergies that excludes the allergy at the specified index
    const newAllergies = allergies.filter(
      (_, index) => index !== indexToRemove
    );

    // Update the state with the new array of allergies
    setAllergies(newAllergies);
  };

  return (
    <Wrapper keyboard>
      <Box flex="0.1" justifyContent="flex-start">
        <Pressable onPress={() => router.back()}>
          <ChevronLeftIcon color="#EEE" size="lg" />
        </Pressable>
      </Box>
      <Box flex="0.8" justifyContent="center" px="4">
        <Box justifyContent="center">
          <Heading fontSize="2xl" color="#EEE">
            Allergies
          </Heading>
          <Text fontSize="lg" color="#EEE">
            Please list all of your known allergies.
          </Text>
        </Box>
        <VStack mt="4" space="4">
          <TextInputFormControl
            label="Allergy"
            ref={allergyRef}
            onSubmitEditing={() => severityRef.current.focus()}
          />
          <TextInputFormControl
            label="Severity"
            ref={severityRef}
            onSubmitEditing={() => Keyboard.dismiss()}
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Button
            alignSelf="center"
            variant="primary"
            onPress={handleAddAllergy}
            w="1/3"
            _text={{
              fontSize: "md",
            }}
          >
            Add
          </Button>
          <Box bgColor="#EEE" rounded="15" mt="6">
            <ScrollView maxH="32" p="2" my="2">
              {allergies.map((allergy, index) => (
                <Box
                  key={index}
                  flexDirection="row"
                  alignItems="center"
                  alignSelf="center"
                >
                  <Text
                    mx="2"
                    color="shades.1"
                    fontSize="md"
                    fontWeight="semibold"
                  >
                    {allergy.allergy} - {allergy.severity}
                  </Text>
                  <Button
                    variant="unstyled"
                    onPress={() => handleRemoveAllergy(index)}
                  >
                    <Text color="fuchsia.500" fontWeight="bold" fontSize="md">
                      X
                    </Text>
                  </Button>
                </Box>
              ))}
            </ScrollView>
          </Box>
        </VStack>
      </Box>
      <Box flex="0.1" alignItems="center" justifyContent="flex-end">
        <Button
          variant="primary"
          onPress={() => attemptCreateAllergy()}
          _text={{
            fontSize: "lg",
          }}
          w="70%"
        >
          Continue
        </Button>
      </Box>
    </Wrapper>
  );
}
