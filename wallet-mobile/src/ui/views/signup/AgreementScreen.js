import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients, TextStyles } from "../../Styles";
import Checkbox from "expo-checkbox";
import Header from "../../components/Header";

const AgreementScreen = ({ navigation }) => {
  const [confirm, setConfirm] = useState(false);

  return (
    // Background Gradient
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      {/* Padding Based on Device */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Screen Container */}
        <View style={ScreenStyles.container}>
          {/* Header */}
          <Header navigation={navigation} />
          {/* Non-Header Container */}
          <View style={ScreenStyles.nonHeaderContainer}>
            {/* 80% Container */}
            <View style={{ flex: 0.8 }}>
              {/* Terms Header */}
              <Text style={TextStyles.page.header}>Terms & Conditions</Text>
              {/* Terms Description */}
              <Text style={TextStyles.page.description}>
                Please read and accept the terms of service.
              </Text>
              {/* Spacer */}
              <View style={{ marginVertical: 10 }}></View>
              {/* Terms ScrollView */}
              <ScrollView style={AgreeStyles.scroll}>
                {/* Terms Text */}
                <Text style={AgreeStyles.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </Text>
              </ScrollView>
              {/* Spacer */}
              <View style={{ marginVertical: 10 }}></View>
              {/* Terms Checkbox View */}
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* Terms Checkbox */}
                <Checkbox
                  value={confirm}
                  onValueChange={setConfirm}
                  style={AgreeStyles.checkbox}
                />
                {/* Terms Checkbox Text */}
                <Text style={TextStyles.page.description}>I Agree</Text>
              </View>
            </View>
          </View>
          {/* Continue Button */}
          <PrimaryButton
            text="Continue"
            options={{
              onPress: () => {
                return navigation.navigate("CreateAccount", {
                  agreement: confirm,
                });
              },
              disabled: !confirm,
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const AgreeStyles = StyleSheet.create({
  checkbox: {
    width: 30,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    borderColor: "#EEE",
  },
  scroll: {
    borderColor: "#EEE",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  text: {
    color: "#EEE",
    fontFamily: "Quicksand-Regular",
    fontSize: "20",
    paddingTop: 2,
    paddingBottom: 25,
  },
});

export default AgreementScreen;
