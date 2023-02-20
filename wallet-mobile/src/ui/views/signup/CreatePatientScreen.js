import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createPatient } from "../../../api/strapi-client";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Gradients, TextStyles, ScreenStyles } from "../../Styless";
import { PrimaryButton } from "../../components/Buttons";
import Input from "../../components/Inputs";
import DatePicker from "../../components/DatePicker";
import Header from "../../components/Header";
import { TouchableHighlight } from "react-native-gesture-handler";

const CreatePatient = ({ navigation }) => {
  // Boolean control for SecureText
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const demo = useState(true);

  async function attemptCreatePatient() {
    try {
      const result = await createPatient(
        firstName,
        middleName,
        lastName,
        phone,
        birthday
      );
      if (result) return navigation.navigate("HomeRouter", { patient: result });
      // Handle for incorrect logins
    } catch (err) {
      console.log("Create account failed with error");
      console.error(err);
      return false;
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
                changed={(text) => setFirstName(text)}
                req
              />
              {/* Middle Name Input */}
              <Input
                text="Middle Name"
                sample="Michael"
                changed={(text) => setMiddleName(text)}
                req
              />
              {/* Last Name Input */}
              <Input
                text="Last Name"
                sample="Doe"
                changed={(text) => setLastName(text)}
                req
              />
            </View>
            {/* Spacer */}
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
              onPress: () => attemptCreatePatient(),
            }}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CreatePatient;
