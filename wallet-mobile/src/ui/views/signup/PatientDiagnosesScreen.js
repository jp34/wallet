import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenStyles, Gradients, TextStyles } from "../../Styless";
import Header from "../../components/Header";
import CheckboxList from "../../components/CheckboxList";
import { PrimaryButton } from "../../components/Buttons";

const PatientDiagnosesScreen = ({ navigation }) => {
  const demo = useState(true);

  const attemptCreateAccount = async () => {
    if (demo) return navigation.navigate("PatientMedication");
  };

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
            <Text style={TextStyles.page.header}>Diagnoses</Text>
            <Text style={TextStyles.page.description}>
              Do you have any pre-existing diagnoses?
            </Text>
            <Text style={TextStyles.page.description}>
              Select all that apply.
            </Text>
            <View style={{ marginVertical: 10 }}></View>
            <ScrollView style={{ flex: 1 }}>
              {/* Checklist Section */}
              <View style={ScreenStyles.sectionContainer}>
                {/* Checklist */}
                <CheckboxList
                  options={["Asthma", "Hypertension", "Hypotension", "None"]}
                />
              </View>
            </ScrollView>
          </View>
          <PrimaryButton
            text="Continue"
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
