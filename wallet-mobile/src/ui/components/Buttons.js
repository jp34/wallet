import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

export const PrimaryButton = ({ label, options }) => {
  return (
    // Button View
    <TouchableHighlight
      style={ButtonStyles.primary.view}
      underlayColor="#EEEEEE35"
      {...options}
    >
      {/* Button Text */}
      <Text style={ButtonStyles.primary.text}>{label}</Text>
    </TouchableHighlight>
  );
};

export const SecondaryButton = ({ label, options }) => {
  return (
    <TouchableHighlight style={ButtonStyles.secondary} {...options}>
      <Text style={ButtonStyles.secondaryText}>{label}</Text>
    </TouchableHighlight>
  );
};

const ButtonStyles = StyleSheet.create({
  primary: {
    view: {
      height: 50,
      width: 300,
      justifyContent: "center",
      borderWidth: 1.5,
      borderColor: "#EEE",
      borderRadius: 10,
      alignItems: "center",
    },
    text: {
      color: "#EEE",
      fontSize: 20,
    },
  },
  secondary: {
    width: "100%",
    height: 48,
    paddingVertical: 8,
    paddingHorizontal: 64,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6030D9",
    borderRadius: 8,
  },
  secondaryText: {
    color: "#eeeeee",
    fontSize: 20,
  },
});
