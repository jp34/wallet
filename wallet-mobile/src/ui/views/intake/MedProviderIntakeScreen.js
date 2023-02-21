import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenStyles, Gradients, TextStyles } from "../../Styles";
import Header from "../../components/Header";
import Input from "../../components/Inputs";
import { PrimaryButton } from "../../components/Buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomAlert from "../../components/CustomAlert";

const PatientMedProviderScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("Submission Failed");

  const attemptPatientMedProvider = async () => {
    console.log(`Title: ${title}`);
    console.log(`Email: ${email}`);
    console.log(`Phone Number: ${phone}`);
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const attemptSubmission = () => {
    if (title.trim() === "") {
      setMessage("Please enter a Title.");
      setShowAlert(true);
      return;
    } else if (email.trim() === "") {
      setMessage("Please enter an Email Address.");
      setShowAlert(true);
      return;
    } else if (phone.trim() === "") {
      setMessage("Please enter a Phone Number.");
      setShowAlert(true);
      return;
    } else if (!validateEmail(email)) {
      setMessage("PLease enter a valid Email Address.");
      setShowAlert(true);
      return;
    } else {
        attemptPatientMedProvider(title, email, phone);
    }
  };

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
            {/* Medical Provider Page Header */}
            <Text style={TextStyles.page.header}>Medical Provider</Text>
            {/* Medical Provider Page Description */}
            <Text style={TextStyles.page.description}>
              Who is your current medical provider?
            </Text>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            {/* Title Input Section */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Title Input */}
              <Input
                text="Title"
                sample="Dr. J Doe"
                changed={(newText) => setTitle(newText)}
                value={title}
              />
            </View>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            {/* Email Input Section */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Email Input */}
              <Input
                text="Email"
                sample="myemail@gmail.com"
                changed={(newText) => setEmail(newText)}
                value={email}
              />
            </View>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            {/* Phone Number Input Section */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Phone Number Input */}
              <Input
                text="Phone Number"
                sample="123-123-1234"
                changed={(newText) => setPhone(newText)}
                value={phone}
              />
            </View>
          </View>
          {/* Continue Button */}
          <PrimaryButton
            text="Continue"
            options={{
              onPress: () => attemptSubmission(),
            }}
          />
          {showAlert && (
            <CustomAlert
              message={message}
              onPress={() => setShowAlert(false)}
            />
          )}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PatientMedProviderScreen;
