import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createPatient } from "../../../api/strapi-client";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Gradients, TextStyles, ScreenStyles } from "../../Styles";
import { PrimaryButton } from "../../components/Buttons";
import { Input } from "../../components/Inputs";
import DatePicker from "../../components/DatePicker";
import Header from "../../components/Header";

const CreatePatientScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const demo = useState(true);

  async function attemptCreatePatient() {
    if (demo) return navigation.navigate("HomeRouter");
    try {
      const result = await createPatient(
        firstName,
        middleName,
        lastName,
        phone,
        birthday
      );
      if (result) return navigation.navigate("HomeRouter");
      // Handle for incorrect logins
    } catch (err) {
      console.log("Create Patient Failed.");
      console.error(err);
    }
  }

  return (
    // Background Gradient
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      {/* Padding Based on Device */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Screen Container */}
        <KeyboardAwareScrollView
          contentContainerStyle={ScreenStyles.flexGrowContainer}
          scrollEnabled={false}
          extraHeight={200}
        >
          {/* Header */}
          <Header navigation={navigation} />
          {/* Non-Header Container */}
          <View style={ScreenStyles.nonHeaderContainer}>
            <Text style={TextStyles.page.header}>About You</Text>
            <Text style={TextStyles.page.description}>
              Tell us more about you!
            </Text>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            {/* Section View */}
            <View style={ScreenStyles.sectionContainer}>
              {/* First Name Input */}
              <Input
                text="First Name"
                sample="John"
                changed={(text) => setFirstName(text)}
              />
              {/* Middle Name Input */}
              <Input
                text="Middle Name"
                sample="Michael"
                changed={(text) => setMiddleName(text)}
              />
              {/* Last Name Input */}
              <Input
                text="Last Name"
                sample="Doe"
                changed={(text) => setLastName(text)}
              />
            </View>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            {/* Section View */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Phone Number Input */}
              <Input
                text="Phone Number"
                sample="123-123-1234"
                changed={(text) => setPhone(text)}
              />
            </View>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            {/* Section View */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Birth Date Input View */}
              {/* Birth Date Input */}
              <Input
                text="Birth Date"
                changed={(text) => setBirthday(text)}
                sample="01/02/2003"
              />
            </View>
          </View>
          <View style={{ marginVertical: 10 }}></View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          ></View>
          <PrimaryButton
            label="Continue"
            options={{
              onPress: () => attemptCreatePatient(),
            }}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CreatePatientScreen;
