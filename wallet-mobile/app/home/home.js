import { useEffect, useState } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { ScreenStyles } from "../../Style";
// import { SecondaryButton } from "../../../components/Buttons";
// import { findPatientByUserId } from "../../../api/strapi-client";
import Wrapper from "../../src/components/Wrapper";
import { Box, Heading } from "native-base";

export default function HomeScreen() {
  const [isLoading, setLoading] = useState(true);
  const [patient, setPatient] = useState("");

  //   useEffect(() => {
  //     findPatientByUserId().then((data) => {
  //       setPatient(data);
  //       setLoading(false);
  //     });
  //   }, []);

  //   const renderLoading = () => {
  //     return (
  //       <View style={ScreenStyles.container}>
  //         <Text>Loading...</Text>
  //       </View>
  //     );
  //   };

  //   const renderLoaded = () => {
  //     return (
  //       <View style={ScreenStyles.container}>
  //         <Text style={HomeStyles.message}>
  //           Welcome {patient.attributes.firstName}
  //         </Text>
  //         <SecondaryButton
  //           label="Complete Account"
  //           options={{
  //             onPress: () => {
  //               return navigation.navigate("IntakeRouter");
  //             },
  //           }}
  //         />
  //       </View>
  //     );
  //   };

  //   return isLoading ? renderLoading() : renderLoaded();

  return (
    <Wrapper>
      <Box flex="0.2" justifyContent="center">
        <Heading fontSize="3xl" color="#EEE">
          Home
        </Heading>
      </Box>
      <Box flex="0.8" bgColor="#EEE"></Box>
    </Wrapper>
  );
}

// const HomeStyles = StyleSheet.create({
//   message: {
//     fontSize: 22,
//     fontFamily: "Quicksand-SemiBold",
//     paddingHorizontal: 8,
//     paddingVertical: 16,
//     color: "#0c0c0c",
//   },
// });
