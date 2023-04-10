import React, { useState, useRef } from "react";
import { Keyboard } from "react-native";
import { useRouter } from "expo-router";
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
import Wrapper from "../../src/components/Wrapper";
import TextInputFormControl from "../../src/components/InputFormControl";
import { createPatientAllergies } from "../api";

export default function AllergiesIntakeScreen() {
  const router = useRouter();
  const allergyRef = useRef(null);
  const severityRef = useRef(null);

  const [allergies, setAllergies] = useState([]);

  async function attemptCreateAllergy() {
    try {
      // Handle save allergies.
      if (allergies.length > 0) {
        const result = await createPatientAllergies(allergies);
        if (result) router.push("./medications");
      } else {
        router.push("./medications");
      }
    } catch (err) {
      console.error(err);
      return;
    }
  }

  const handleAddAllergy = () => {
    const allergy = allergyRef.current.getValue();
    const severity = severityRef.current.getValue();

    if (allergy === "" || severity === "") return;
    const newAllergy = { name: allergy, severity: severity };

    setAllergies([...allergies, newAllergy]);

    allergyRef.current.clear();
    severityRef.current.clear();
    Keyboard.dismiss();
  };

  const handleRemoveAllergy = (indexToRemove) => {
    const newAllergies = allergies.filter(
      (_, index) => index !== indexToRemove
    );
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
          <Box bgColor="secondaryViolet.600" rounded="15" mt="6">
            <ScrollView maxH="32" p="2" my="2">
              {allergies.length === 0 ? (
                <Text color="#EEE" fontSize="lg" fontWeight="semibold" mx="2">
                  No Allergies
                </Text>
              ) : (
                allergies.map((allergy, index) => (
                  <Box
                    key={index}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text
                      mx="2"
                      color="#EEE"
                      fontSize="lg"
                      fontWeight="semibold"
                    >
                      {allergy.name} - {allergy.severity}
                    </Text>
                    <Box>
                      <Button
                        variant="unstyled"
                        onPress={() => handleRemoveAllergy(index)}
                      >
                        <Text color="white" fontSize="md">
                          Remove
                        </Text>
                      </Button>
                    </Box>
                  </Box>
                ))
              )}
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
