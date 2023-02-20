import React from "react";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../styles";
import CheckboxList from "../components/CheckboxList";

const IntakePatientDiagnoses = ({ navigation }) => {
  return (
    // Gradient Background
    <LinearGradient colors={styles.colors.gradient1} style={{ flex: 1 }}>
      {/* Page Container */}
      <View style={styles.containerNormal}>
        {/* Enable Scrolling */}
        <ScrollView style={{ flex: 1 }}>
          {/* Title */}
          <Text style={styles.text.title}>Diagnoses</Text>
          {/* Paragraphs */}
          <Text style={styles.text.paragraph}>
            Do you have any pre-existing diagnoses?
          </Text>
          <Text style={styles.text.paragraph}>Select all that apply.</Text>
          {/* Checklist Section */}
          <View style={styles.section}>
            {/* Checklist */}
            <CheckboxList
              options={["Asthma", "Hypertension", "Hypotension", "None"]}
            />
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default IntakePatientDiagnoses;
