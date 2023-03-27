import React, { useState, useRef } from "react";
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

export default function MedicalEncountersScreen() {
  const router = useRouter();

  const providerRef = useRef(null);
  const reasonRef = useRef(null);
  const diagnosisRef = useRef(null);

  const [encounterList, setEncounterList] = useState([]);

  async function attemptCreateEncounter() {
    try {
      // Handle saving medical encounters
      router.push("../home");
    } catch (err) {
      console.error(err);
      return;
    }
  }

  const handleAddEncounter = () => {
    const provider = providerRef.current.getValue();
    const reason = reasonRef.current.getValue();
    const diagnosis = diagnosisRef.current.getValue() || "N/A";

    if (provider === "" || reason === "") return;

    const newEncounter = { provider, reason, diagnosis };
    setEncounterList([...encounterList, newEncounter]);

    providerRef.current.clear();
    reasonRef.current.clear();
    diagnosisRef.current.clear();
  };

  const handleRemoveEncounter = (indexToRemove) => {
    const newEncounterList = encounterList.filter(
      (_, index) => index !== indexToRemove
    );
    setEncounterList(newEncounterList);
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
            Medical Encounters
          </Heading>
          <Text fontSize="lg" color="#EEE">
            Please list any recent medical encounters.
          </Text>
        </Box>
        <VStack mt="4" space="4">
          <TextInputFormControl
            label="Medical Provider"
            ref={providerRef}
            onSubmitEditing={() => reasonRef.current.focus()}
          />
          <TextInputFormControl
            label="Reason for Visit"
            ref={reasonRef}
            onSubmitEditing={() => diagnosisRef.current.focus()}
          />
          <TextInputFormControl
            label="Diagnosis (Optional)"
            ref={diagnosisRef}
            onSubmitEditing={() => handleAddEncounter()}
          />
          <Button
            alignSelf="center"
            variant="primary"
            onPress={handleAddEncounter}
            w="1/3"
            _text={{
              fontSize: "md",
            }}
          >
            Add
          </Button>
          <Box bgColor="secondaryViolet.600" rounded="15" mt="6">
            <ScrollView maxH="32" p="2" my="2">
              {encounterList.length === 0 ? (
                <Text color="#EEE" fontSize="lg" fontWeight="semibold" mx="2">
                  No Medical Encounters
                </Text>
              ) : (
                encounterList.map((encounter, index) => (
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
                      {encounter.provider} - {encounter.reason}
                      {encounter.relatedDiagnosis
                        ? `(${encounter.relatedDiagnosis})`
                        : ""}
                    </Text>
                    <Box>
                      <Button
                        variant="unstyled"
                        onPress={() => handleRemoveEncounter(index)}
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
          onPress={() => attemptCreateEncounter()}
          _text={{
            fontSize: "lg",
          }}
          w="70%"
        >
          Save
        </Button>
      </Box>
    </Wrapper>
  );
}
