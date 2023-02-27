import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients, TextStyles } from "../../Style";
import Header from "../../components/Header";
import { Input } from "../../components/Inputs";

const MedicationIntakeScreen = ({ navigation }) => {

  return (
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header navigation={navigation} />
        <KeyboardAvoidingView
          style={{
            paddingHorizontal: 30,
            flex: 1,
            justifyContent: "space-between",
          }}
          behavior="height"
        >
          <View>
            <Text style={TextStyles.header}>Medications</Text>
            <Text style={TextStyles.description}>
              Please record any current medications.
            </Text>
            <View style={{ marginVertical: 10 }}></View>
            <View style={ScreenStyles.section}>
              <Input text="Name" sample="..." />
              <Input text="Dosage" sample="..." />
              <Input text="Frequency" sample="..." />
              <Input text="Date Prescribed" sample="..." />
              <Input text="Related Diagnosis" sample="..." />
            </View>
          </View>
          <View>
            <PrimaryButton label="Continue"/>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MedicationIntakeScreen;
