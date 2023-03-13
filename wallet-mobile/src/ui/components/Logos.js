import React from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Gradients } from "../Style";

export const LargeLogo = () => {
  const styles = StyleSheet.create({
    container: {
      width: 160,
      aspectRatio: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 28,
    },
    text: {
      color: "#eeeeee",
      fontSize: 30,
      fontWeight: "bold",
      letterSpacing: 1,
    },
  });
  return (
    <LinearGradient
      colors={["#6d28d9", "#4c1d95"]}
      style={styles.container}
    >
      <Text style={styles.text}>JustBe</Text>
    </LinearGradient>
  );
};

export const SmallLogo = () => {
  const styles = StyleSheet.create({
    container: {
      width: 55,
      aspectRatio: 1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    text: {
      color: "#eeeeee",
      fontSize: 12,
      fontWeight: "bold",
      letterSpacing: 1,
    },
  });
  return (
    <LinearGradient
      colors={["violet.600", "violet.900"]}
      style={styles.container}
    >
      <Text style={styles.text}>JustBe</Text>
    </LinearGradient>
  );
};
