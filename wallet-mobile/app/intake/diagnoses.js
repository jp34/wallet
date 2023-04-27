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
import Wrapper from "../components/Wrapper";
import TextInputFormControl from "../components/InputFormControl";

export default function DiagnosesIntakeScreen() {
  const router = useRouter();

  const diagnosisRef = useRef(null);

  const [diagnoses, setDiagnoses] = useState([]);

  const handleAddDiagnosis = () => {
    const diagnosis = diagnosisRef.current.getValue();

    if (diagnosis === "") {
      return;
    }

    const newDiagnosis = { diagnosis };

    setDiagnoses([...diagnoses, newDiagnosis]);

    diagnosisRef.current.clear();
    Keyboard.dismiss();
  };

  const handleRemoveDiagnosis = (indexToRemove) => {
    const newDiagnoses = diagnoses.filter(
      (_, index) => index !== indexToRemove
    );
    setDiagnoses(newDiagnoses);
  };

  async function attemptCreateDiagnosis() {
    try {
      // Handle saving diagnoses
      // const result = await createPatientDiagnosis(patientId, diagnosis);
      router.push("./medicalEncounter");
    } catch (err) {
      console.error(err);
      return;
    }
  }

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
            Diagnoses
          </Heading>
          <Text fontSize="lg" color="#EEE">
            Please list all of your diagnoses.
          </Text>
        </Box>
        <VStack mt="4" space="4">
          <TextInputFormControl
            label="Diagnosis"
            ref={diagnosisRef}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
          <Button
            alignSelf="center"
            variant="primary"
            onPress={handleAddDiagnosis}
            w="1/3"
            _text={{
              fontSize: "md",
            }}
          >
            Add
          </Button>
          <Box bgColor="secondaryViolet.600" rounded="15" mt="6">
            <ScrollView maxH="32" p="2" my="2">
              {diagnoses.length === 0 ? (
                <Text color="#EEE" fontSize="lg" fontWeight="semibold" mx="2">
                  No Diagnoses
                </Text>
              ) : (
                diagnoses.map((diagnosis, index) => (
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
                      {diagnosis.diagnosis}
                    </Text>
                    <Box>
                      <Button
                        variant="unstyled"
                        onPress={() => handleRemoveDiagnosis(index)}
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
          onPress={() => attemptCreateDiagnosis()}
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
