import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients, TextStyles } from "../../Styless";
import Header from "../../components/Header";
import { createAccount } from "../../../api/strapi-client";
import Input from "../../components/Inputs";
import DatePicker from "../../components/DatePicker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateAccountScreen = ({ navigation, route }) => {
  const confirm = route.params.agreement;
  const [email, setEmail] = React.useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordConfirm, setPasswordConfirm] = React.useState();
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  // API Methods

  const attemptCreateAccount = async () => {
    try {
      console.log(`Username: ${username}`);
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
      console.log(`PasswordConfirm: ${passwordConfirm}`);
      const result = await createAccount(username, email, password, confirm);
      if (result) return navigation.navigate("CreatePatient");
      // Handle for incorrect logins
    } catch (err) {
      console.log("Create account failed with error");
      console.error(err);
      return false;
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

export default CreateAccountScreen;
