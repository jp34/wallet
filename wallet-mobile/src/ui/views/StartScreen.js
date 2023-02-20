import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenStyles, Gradients } from "../Styless";
import { LargeLogo } from "../components/Logos";
import { PrimaryButton } from "../components/Buttons";

const StartScreen = ({ navigation }) => {
  return (
    // Background Gradient
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      {/* Padding Based on Device */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Screen Container */}
        <View style={ScreenStyles.container}>
          {/* Logo Container */}
          <View style={StartStyles.logoContainer}>
            {/* Large Logo */}
            <LargeLogo />
          </View>
          {/* Form Container */}
          <View style={StartStyles.formContainer}>
            {/* Sign Up Button */}
            <PrimaryButton
              text="Get Started"
              options={{
                onPress: () => {
                  return navigation.navigate("Splash");
                },
              }}
            />
            {/* Login Subtitle View */}
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              {/* Subtitle Text */}
              <Text style={{ color: "#EEE", fontFamily: "Quicksand-Regular" }}>Already have an account?</Text>
              {/* Subtitle Hyperlink */}
              <Text
                style={{
                  paddingLeft: 8,
                  color: "#2A93D5",
                  fontFamily: "Quicksand-Bold"
                }}
                onPress={() => navigation.navigate("Login")}
              >
                Log In
              </Text>
            </View>
          </View>
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
  formContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default StartScreen;
