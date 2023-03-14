import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { SmallLogo } from "./Logo";

const Header = ({ navigation }) => {
  return (
    <View style={HeaderStyles.container}>
      <TouchableHighlight
        style={HeaderStyles.cancel}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={HeaderStyles.cancelText}>Cancel</Text>
      </TouchableHighlight>
      <View style={HeaderStyles.logo}>
        <SmallLogo />
      </View>
      <View style={HeaderStyles.spacer}></View>
    </View>
  );
};

const HeaderStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: "100%",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cancel: {
    flex: 1,
  },
  cancelText: {
    fontSize: 14,
    color: "#eeeeee",
  },
  logo: {
    flex: 2,
    alignItems: "center",
  },
  spacer: {
    flex: 1,
  },
});

export default Header;
