import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenStyles, Gradients, TextStyles } from "../../Styles";
import Header from "../../components/Header";
import {Input} from "../../components/Inputs";
import { PrimaryButton } from "../../components/Buttons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const EncountersIntakeScreen = ({ navigation }) => {
  return (
    // Background Gradient
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      {/* Padding Based on Device */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Screen Container */}
        <KeyboardAwareScrollView contentContainerStyle={ScreenStyles.container}>
          {/* Header */}
          <Header navigation={navigation} />
          {/* Non-Header Container */}
          <View style={ScreenStyles.nonHeaderContainer}>
            {/* Medical Provider Page Header */}
            <Text style={TextStyles.page.header}>
              Recent Medical Encounters
            </Text>
            {/* Medical Provider Page Description */}
            <Text style={TextStyles.page.description}>
              Have you had any recent medical encounters? If so, please state.
            </Text>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            <View style={ScreenStyles.sectionContainer}>
              <Input text="Medical Provider" sample="Dr. J Doe" />
            </View>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            {/* Email Input Section */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Email Input */}
              <Input text="Reason For Visit" sample="Routine" />
            </View>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            {/* Phone Number Input Section */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Phone Number Input */}
              <Input text="Related to Diagnosis?" sample="..." />
            </View>
          </View>
          {/* Continue Button */}
          <PrimaryButton
            label="Continue"
            options={{
              onPress: () => attemptSubmission(),
            }}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default EncountersIntakeScreen;
