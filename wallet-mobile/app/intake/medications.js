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
import { createPatientMedications } from "../api";

export default function MedicationsIntakeScreen() {
  const router = useRouter();

  const nameRef = useRef(null);
  const dosageRef = useRef(null);
  const frequencyRef = useRef(null);
  const dateRef = useRef(null);

  const [medications, setMedications] = useState([]);

  async function attemptCreateMedication() {
    try {
      // Handle saving medications
      if (medications.length > 0) {
        const result = await createPatientMedications(medications);
        if (result) router.push("./medicalEncounter");
      } else {
        router.push("./medicalEncounter");
      }
    } catch (err) {
      console.error(err);
      return;
    }
  }

  const handleAddMedication = () => {
    const name = nameRef.current.getValue();
    const dosage = dosageRef.current.getValue();
    const frequency = frequencyRef.current.getValue();
    const date = dateRef.current.getValue();

    if (name === "" || dosage === "" || frequency === "" || date === "") {
      return;
    }

    const newMedication = { name, dosage, frequency, date };

    setMedications([...medications, newMedication]);

    nameRef.current.clear();
    dosageRef.current.clear();
    frequencyRef.current.clear();
    dateRef.current.clear();
    Keyboard.dismiss();
  };

  const handleRemoveMedication = (indexToRemove) => {
    const newMedications = medications.filter(
      (_, index) => index !== indexToRemove
    );
    setMedications(newMedications);
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
            Medications
          </Heading>
          <Text fontSize="lg" color="#EEE">
            Please list all of your current medications.
          </Text>
        </Box>
        <VStack mt="4" space="2">
          <TextInputFormControl
            label="Name"
            ref={nameRef}
            onSubmitEditing={() => dosageRef.current.focus()}
          />
          <TextInputFormControl
            label="Dosage"
            ref={dosageRef}
            onSubmitEditing={() => frequencyRef.current.focus()}
          />
          <TextInputFormControl
            label="Frequency"
            ref={frequencyRef}
            onSubmitEditing={() => dateRef.current.focus()}
          />
          <TextInputFormControl
            label="Date Prescribed"
            ref={dateRef}
            onSubmitEditing={() => Keyboard.dismiss()}
            keyboardType="numeric"
            returnKeyType="done"
          />
          <Button
            alignSelf="center"
            variant="primary"
            onPress={handleAddMedication}
            w="1/3"
            _text={{
              fontSize: "md",
            }}
          >
            Add
          </Button>
          <Box bgColor="secondaryViolet.600" rounded="15" mt="4">
            <ScrollView maxH="20" p="2" my="2">
              {medications.length === 0 ? (
                <Text color="#EEE" fontSize="md" fontWeight="semibold" mx="2">
                  No Medications
                </Text>
              ) : (
                medications.map((medication, index) => (
                  <Box
                    key={index}
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Text
                      mx="2"
                      color="#EEE"
                      fontSize="sm"
                      fontWeight="semibold"
                    >
                      {medication.name} - {medication.dosage} -{" "}
                      {medication.frequency} - {medication.date}
                    </Text>
                    <Box>
                      <Button
                        variant="unstyled"
                        onPress={() => handleRemoveMedication(index)}
                      >
                        <Text color="white" fontSize="sm">
                          X
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
          onPress={() => attemptCreateMedication()}
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
