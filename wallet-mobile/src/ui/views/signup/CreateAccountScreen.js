import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients, TextStyles } from "../../Styless";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createAccount } from "../../../api/strapi-client";
import Header from "../../components/Header";
import Input from "../../components/Inputs";

const CreateAccountScreen = ({ navigation, route }) => {
  const confirm = route.params.agreement;
  const [email, setEmail] = useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const demo = useState(true);

  const attemptCreateAccount = async () => {
    if (demo) return navigation.navigate("CreatePatient");
    try {
      if (email === "") {
        console.log("Email Empty");
      } else if (username === "") {
        console.log("Username Empty");
      } else if (password === "") {
        console.log("Password Empty");
      } else if (passConfirm === "") {
        console.log("Pass Confirm Empty");
      } else if (password != passConfirm) {
        console.log("Passwords Do Not Match");
      } else {
        console.log(`Username: ${username}`);
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        console.log(`PasswordConfirm: ${passConfirm}`);
        const result = await createAccount(username, email, password, confirm);
        if (result) return navigation.navigate("CreatePatient");
      }
    } catch (err) {
      console.log("Create Account Failed");
      return;
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
            {/* Create Acc Header */}
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
                changed={(newText) => setPassConfirm(newText)}
                password
              />
            </View>
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
