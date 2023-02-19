import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../styles";
import CheckboxList from "../components/CheckboxList";

const IntakePatientDiagnoses = ({ navigation }) => {
  return (
    <LinearGradient colors={styles.colors.gradient1} style={{ flex: 1 }}>
      <View style={styles.containerNormal}>
      <ScrollView style={{flex: 1}}>
        <Text style={styles.text.title}>Diagnoses</Text>
        <Text style={styles.text.paragraph}>
          Do you have any existing diagnoses?
        </Text>
        <Text style={styles.text.paragraph}>Select all that apply.</Text>
        <CheckboxList options={["Asthma", "Hypertension", "Hypotension", "None"]} />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};
export default IntakePatientDiagnoses;
