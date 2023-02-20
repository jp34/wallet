import React from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Gradients } from "../Styles";

const LargeLogo = () => {
  return (
    // Logo Gradient / View
    <LinearGradient
      colors={Gradients.gradient2}
      style={LogoStyles.largeLogo.container}
    >
      {/* Logo Text */}
      <Text style={LogoStyles.largeLogo.text}>JustBe</Text>
    </LinearGradient>
  );
};

const SmallLogo = () => {
  return (
    // Logo Gradient / View
    <LinearGradient
      colors={Gradients.gradient2}
      style={LogoStyles.smallLogo.container}
    >
      {/* Logo Text */}
      <Text style={LogoStyles.smallLogo.text}>JustBe</Text>
    </LinearGradient>
  );
};

const LogoStyles = StyleSheet.create({
  largeLogo: {
    container: {
      width: 160,
      aspectRatio: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 28,
    },
    text: {
      color: "#EEE",
      fontSize: 30,
      fontWeight: "bold",
      letterSpacing: 1,
    },
  },
  smallLogo: {
    container: {
      width: 55,
      aspectRatio: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    text: {
      color: "#EEE",
      fontSize: 12,
      fontWeight: "bold",
      letterSpacing: 1,
    },
  },
});

export { LargeLogo, SmallLogo };
