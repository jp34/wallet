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
} from "native-base";
import Wrapper from "../../src/components/Wrapper";
import TextInputFormControl from "../../src/components/InputFormControl";

export default function MedicalEncounterIntakeScreen() {
  const providerRef = useRef(null);
  const reasonRef = useRef(null);
  const diagnosisRef = useRef(null);

  const [provider, setProvider] = useState("");
  const [reason, setReason] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  async function attemptCreateEncounter() {
    try {
      // Handle saving medical encounter
      // const result = await createMedicalEncounter(patientId, provider, reason, diagnosis);
      router.push("");
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
            Medical Encounter
          </Heading>
          <Text fontSize="lg" color="#EEE">
            Please provide information about your medical encounter.
          </Text>
        </Box>
        <VStack mt="4" space="4">
          <TextInputFormControl
            label="Medical Provider"
            ref={providerRef}
            value={provider}
            onChangeText={(text) => setProvider(text)}
            onSubmitEditing={() => reasonRef.current.focus()}
          />
          <TextInputFormControl
            label="Reason for Visit"
            ref={reasonRef}
            value={reason}
            onChangeText={(text) => setReason(text)}
            onSubmitEditing={() => diagnosisRef.current.focus()}
          />
          <TextInputFormControl
            label="Diagnosis (if applicable)"
            ref={diagnosisRef}
            value={diagnosis}
            onChangeText={(text) => setDiagnosis(text)}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </VStack>
      </Box>
      <Box flex="0.1" alignItems="center" justifyContent="flex-end">
        <Button
          variant="primary"
          onPress={() => attemptCreateEncounter()}
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
