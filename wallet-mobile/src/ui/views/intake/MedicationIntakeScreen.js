import React, { useState } from "react";
import Header from "../../components/Header";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenStyles, Gradients, TextStyles } from "../../Styles";
import { PrimaryButton } from "../../components/Buttons";
import { Input } from "../../components/Inputs";

const MedicationIntakeScreen = ({ navigation }) => {
  const attemptMedications = async () => {};

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
            {/* Medication Page Header */}
            <Text style={TextStyles.page.header}>Medications</Text>
            {/* Medication Page Description */}
            <Text style={TextStyles.page.description}>
              Are you currently taking any medications?
            </Text>
            <View style={{ marginVertical: 10 }}></View>
            <View styles={ScreenStyles.sectionContainer}>
              <Input
                text="# of Medications"
                changed={(text) => setMedNumber(text)}
              />
            </View>
            <View style={{ marginVertical: 10 }}></View>
            <Text style={TextStyles.page.description}>
              Please list all medications.
            </Text>
            <View style={ScreenStyles.sectionContainer}>
              <TextInput
                style={{
                  borderColor: "#EEE",
                  height: 40,
                  color: "#EEE",
                  fontSize: 18,
                  height: 200,
                  textAlignVertical: "top",
                  borderColor: "#EEE",
                  borderRadius: 10,
                  padding: 10,
                }}
                multiline={true}
                numberOfLines={4}
                placeholder="Name / Dose / Frequency / Date Prescribed / Related Diagnosis"
                placeholderTextColor="#fff"
              />
            </View>
          </View>
          <PrimaryButton
            label="Continue"
            options={{
              onPress: () => attemptMedications(),
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default MedicationIntakeScreen;
