import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { LargeLogo } from "../components/Logos";
import { PrimaryButton } from "../components/Buttons";
import { LinearGradient } from "expo-linear-gradient";
import {Gradients, ScreenStyles} from "../Styles";

const StartScreen = ({ navigation }) => {
  // Renders Logo
  const renderLogo = () => {
    return (
      // Logo Container
      <View style={StartStyles.logoContainer}>
        {/* Large Logo */}
        <LargeLogo />
      </View>
    );
  };

  // Renders Sign Up Button
  const renderSignUpButton = () => {
    return (
      // Sign Up Button Container
      <View style={StartStyles.buttonContainer}>
        {/* Sign Up Button */}
        <PrimaryButton
          label="Get Started"
          options={{
            onPress: () => {
              return navigation.navigate("Splash");
            },
          }}
        />
        {renderLoginSubtitle()}
      </View>
    );
  };

  // Renders Login Subtitle
  const renderLoginSubtitle = () => {
    return (
      // Login Subtitle View
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        {/* Subtitle Text */}
        <Text style={{ color: "#EEE", fontFamily: "Quicksand-Regular" }}>
          Already have an account?
        </Text>
        {/* Subtitle Hyperlink */}
        <Text
          style={{
            paddingLeft: 8,
            color: "#2A93D5",
            fontFamily: "Quicksand-Bold",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Log In
        </Text>
      </View>
    );
  };

  return (
    // Background Gradient
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      {/* Padding Based on Device */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Screen Container */}
        <View style={ScreenStyles.container}>
          {/* Render Components */}
          {renderLogo()}
          {renderSignUpButton()}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const StartStyles = StyleSheet.create({
  logoContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartScreen;
