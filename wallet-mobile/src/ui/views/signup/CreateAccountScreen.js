import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients, TextStyles } from "../../Styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createAccount } from "../../../api/strapi-client";
import Header from "../../components/Header";
import Input from "../../components/Inputs";

const CreateAccountScreen = ({ navigation, route }) => {
  const confirm = route.params.agreement;
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const demo = useState(true);

  // Create Account Function
  const attemptCreateAccount = async () => {
    if (demo) return navigation.navigate("CreatePatient");
    try {
      if (username.trim() === "") {
        console.log("Invalid username.");
        // Show alert.
      } else if (email.trim() === "") {
        console.log("Invalid email.");
        // Show alert.
      } else if (password.trim() === "") {
        console.log("Password invalid.");
        // Show alert.
      } else if (passwordConfirm.trim() === "") {
        console.log("Password confirm invalid.");
        // Show alert.
      } else {
        if (password != passwordConfirm) {
          console.log("Passwords do not match.");
        } else {
          const result = await createAccount(
            username,
            email,
            password,
            confirm
          );
          if (result) return navigation.navigate("CreatePatient");
        }
      }
    } catch (err) {
      console.log("Create Account Failed.");
      console.error(err);
    }
  };

  const renderAccountForm = () => {
    return (
      <View>
        // Create Acct Header
        <Text style={TextStyles.page.header}>Create Account</Text>
        {/* Create Acc Description */}
        <Text style={TextStyles.page.description}>
          Let's create your JustBe account.
        </Text>
        {/* Spacer */}
        <View style={{ marginVertical: 10 }}></View>
        {/* User Section View */}
        <View style={ScreenStyles.sectionContainer}>
          {/* Email Input */}
          <Input
            text="Email"
            sample="myemail@gmail.com"
            changed={(newText) => setEmail(newText)}
          />
        </View>
        {/* Spacer */}
        <View style={{ marginVertical: 10 }}></View>
        {/* User Section View */}
        <View style={ScreenStyles.sectionContainer}>
          {/* Username Input */}
          <Input
            text="Username"
            sample="jdoe3"
            changed={(newText) => setUsername(newText)}
          />
        </View>
        <View style={{ marginVertical: 10 }}></View>
        {/* Password Section View */}
        <View style={ScreenStyles.sectionContainer}>
          {/* Pass Input */}
          <Input
            text="Password"
            sample="12345"
            changed={(newText) => setPassword(newText)}
            password
          />
          {/* Verify Pass Input */}
          <Input
            text="Verify Password"
            sample="12345"
            changed={(newText) => setPasswordConfirm(newText)}
            password
          />
        </View>
      </View>
    );
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
            {/* {renderAccountForm()} */}
          </View>
          {/* Continue Button */}
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

export default CreateAccountScreen;
