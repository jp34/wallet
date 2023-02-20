import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

export const PrimaryButton = ({ text, options }) => {
  return (
    // Button View
    <TouchableHighlight
      style={ButtonStyles.primary.view}
      underlayColor="#EEEEEE35"
      {...options}
    >
      {/* Button Text */}
      <Text style={ButtonStyles.primary.text}>{text}</Text>
    </TouchableHighlight>
  );
};

const ButtonStyles = StyleSheet.create({
  primary: {
    view: {
      height: 50,
      paddingHorizontal: 100,
      justifyContent: "center",
      borderWidth: 1.5,
      borderColor: "#EEE",
      borderRadius: 10,
    },
    text: {
      color: "#EEE",
      fontSize: 20,
      fontFamily: "Quicksand-Bold"
    },
  },
});
