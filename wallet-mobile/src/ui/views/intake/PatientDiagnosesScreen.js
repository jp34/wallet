import React from "react";
import Header from "../../components/Header";
import CheckboxList from "../../components/CheckboxList";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenStyles, Gradients, TextStyles } from "../../Styles";
import { PrimaryButton } from "../../components/Buttons";
import { Input } from "../../components/Inputs";

const PatientDiagnosesScreen = ({ navigation }) => {
  const attemptPatientDiagnoses = async () => {};

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
            {/* Diagnoses Page Header */}
            <Text style={TextStyles.page.header}>Diagnoses</Text>
            {/* Diagnoses Page Description */}
            <Text style={TextStyles.page.description}>
              Do you have any pre-existing diagnoses?
            </Text>
            <Text style={TextStyles.page.description}>
              Select all that apply.
            </Text>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            {/* Checklist Section */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Checklist */}
              <CheckboxList
                options={["Asthma", "Hypertension", "Hypotension", "None"]}
              />
            </View>
            {/* Spacer */}
            <View style={{ marginVertical: 10 }}></View>
            <View style={ScreenStyles.sectionContainer}>
              <Input text="Other:" />
            </View>
          </View>
          <PrimaryButton
            label="Continue"
            options={{
              onPress: () => attemptPatientDiagnoses(),
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PatientDiagnosesScreen;
