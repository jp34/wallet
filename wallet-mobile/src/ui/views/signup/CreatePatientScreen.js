import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createPatient } from "../../../api/strapi-client";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../../styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";

const CreatePatient = ({ navigation }) => {
  // Boolean control for SecureText
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [date, setDate] = useState("");
  const demo = useState(true);

  // An attempt at live formatting date input to split numbers with "/" e.g 01 / 01 / 2023
  {
    /* function formatDate(value) {
        if (!value) return value;

        const newDate = value;

        const dateLength = newDate.length;

        if (dateLength < 2) return newDate;

        if (dateLength < 4) {
            return `${newDate.slice(0, 2)} / ${newDate.slice(2)}`;
        }

        //return `${newDate.slice(0, 2)} / ${newDate.slice(2,4)} / ${newDate.slice(4,8)}`;
    }
    */
  }

  // Attempts to save the form and move to next intake screen
  async function attemptSave() {
    if (demo) {
      navigation.navigate("IntakeMedProvider");
    } else {
      if (fNmae == null || mNAme == null || lName == null || date == null) {
        // Error
        return;
      } else {
        const result = await createPatient(fName, mName, lName, date);
        if (result) {
          navigation.navigate("IntakeMedProvider");
        } else {
          // Error
          return;
        }
      }
    }
  }

  return (
    // Background Gradient
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      {/* Padding Based on Device */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Screen Container */}
        <KeyboardAwareScrollView contentContainerStyle={ScreenStyles.container}>
          {/* Header */}
          <Header navigation={navigation} />
          {/* Non-Header Container */}
          <View style={ScreenStyles.nonHeaderContainer}>
            <Text style={TextStyles.page.header}>About You</Text>
            <Text style={TextStyles.page.description}>
              Tell us more about you!
            </Text>
            {/* Spacer */}
            <View style={{ marginVertical: 15 }}></View>
            {/* Name Section Header */}
            <Text style={TextStyles.section.header}>Full Name</Text>
            {/* Section View */}
            <View style={ScreenStyles.sectionContainer}>
              {/* First Name Input */}
              <Input
                text="First Name"
                sample="John"
                changed={(text) => setFName(text)}
                req
              />
              {/* Middle Name Input */}
              <Input
                text="Middle Name"
                sample="Michael"
                changed={(text) => setMName(text)}
                req
              />
              {/* Last Name Input */}
              <Input
                text="Last Name"
                sample="Doe"
                changed={(text) => setLName(text)}
                req
              />
            </View>
            <View style={{ marginVertical: 10 }}></View>
            {/* Birth Date Section Header */}
            <Text style={TextStyles.section.header}>Birth Date</Text>
            {/* Section View */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Birth Date Input View */}
              <View style={{ height: 75 }}>
                {/* Birth Date Input */}
                <DatePicker />
              </View>
            </View>
          </View>
          <PrimaryButton
            text="Continue"
            options={{
              onPress: () => attemptCreateAccount(),
            }}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CreatePatient;
