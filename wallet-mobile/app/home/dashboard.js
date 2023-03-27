import { useEffect, useState } from "react";
import { Box, Heading, Text, Center } from "native-base";
import { StyleSheet } from "react-native";
import { findPatientByUserId } from "../../src/api/strapi-client";
import Wrapper from "../../src/components/Wrapper";

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [patient, setPatient] = useState("");

  // useEffect(() => {
  //   findPatientByUserId().then((data) => {
  //     setPatient(data);
  //     setLoading(false);
  //   });
  // }, []);

  const renderLoading = () => {
    return (
      <Box>
        <Text style={HomeStyles.message}>Loading...</Text>
      </Box>
    );
  };

  const renderLoaded = () => {
    return (
      <Box>
        <Text style={HomeStyles.message}>
          Welcome {patient.attributes.firstName}
        </Text>
      </Box>
    );
  };

  return (
    <Wrapper>
      <Box flex="1" px="4">
        <Box flex="0.1" justifyContent="center">
          <Heading fontSize="3xl" color="#EEE">
            Home
          </Heading>
        </Box>
        <Center flex="0.8" bgColor="white" rounded="15">
          {isLoading ? renderLoading() : renderLoaded()}
        </Center>
      </Box>
    </Wrapper>
  );
}

const HomeStyles = StyleSheet.create({
  message: {
    fontSize: 22,
    fontFamily: "Quicksand-SemiBold",
    paddingHorizontal: 8,
    paddingVertical: 16,
    color: "#0c0c0c",
  },
});
