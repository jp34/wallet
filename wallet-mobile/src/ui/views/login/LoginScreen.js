import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { login } from "../../../api/strapi-client";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients } from "../../Styles";
import { Input } from "../../components/Inputs";
import Header from "../../components/Header";

const LoginScreen = ({ navigation }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const attemptLogin = async () => {
    try {
      const result = await login(identifier, password);
      if (result) return navigation.navigate("HomeRouter");
      // Handle for incorrect logins
    } catch (err) {
      console.log("Login failed");
      console.error(err);
      return false;
    }
  };

  // Render Welcome Message
  const renderWelcomeMessage = () => {
    return (
      // Header Message View
      <View>
        {/* Header Title */}
        <Text style={LoginStyles.title}>Login</Text>
        {/* Header Description */}
        <Text style={LoginStyles.description}>Welcome back.</Text>
      </View>
    );
  };

  // Render Login Form
  const renderLoginForm = () => {
    return (
      // Login Form View
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          justifyContent: "center",
        }}
      >
        {/* Email / Username Input */}
        <Input
          text="Email / Username"
          sample="johndoe@apple.com"
          onChangeText={(text) => setIdentifier(text)}
        />
        {/* Password Input */}
        <Input
          text="Password"
          sample="12345"
          onChangeText={(text) => setPassword(text)}
          password
        />
        {/* Spacer */}
        <View style={{ alignItems: "center", marginTop: 40 }}>
          {/* Login Button */}
          <PrimaryButton
            text="Log In"
            options={{
              onPress: () => attemptLogin(),
            }}
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
        {/* Keyboard Avoid View Page Container */}
        <KeyboardAvoidingView
          style={ScreenStyles.container}
          behavior="padding"
          enabled
        >
          {/* Header Component */}
          <Header navigation={navigation} />
          {/* Body Container */}
          <View style={ScreenStyles.nonHeaderContainer}>
            {/* Render Login Welcome Text */}
            {renderWelcomeMessage()}
            {renderLoginForm()}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const LoginStyles = StyleSheet.create({
  title: {
    color: "#EEE",
    fontSize: 40,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: "Quicksand-Bold",
  },
  description: {
    color: "#EEE",
    fontSize: 25,
    marginVertical: 10,
    fontFamily: "Quicksand-Regular",
  },
});

export default LoginScreen;
