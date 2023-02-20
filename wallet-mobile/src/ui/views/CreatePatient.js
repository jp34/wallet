import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createPatient } from "../../api/strapi-client";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../../styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import DatePicker from "../../components/DatePicker";

const CreatePatient = ({ navigation }) => {
  // Boolean control for SecureText
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");
  const [lName, setLName] = useState("");
  const [date, setDate] = useState("");
  const demo = useState(true);

  // An attempt at live formatting date input to split numbers with "/" e.g 01 / 01 / 2023
  {
    /* function formatDate(value) {
        if (!value) return value;

        const newDate = value;

        const dateLength = newDate.length;

        if (dateLength < 2) return newDate;

        if (dateLength < 4) {
            return `${newDate.slice(0, 2)} / ${newDate.slice(2)}`;
        }

        //return `${newDate.slice(0, 2)} / ${newDate.slice(2,4)} / ${newDate.slice(4,8)}`;
    }
    */
  }

  // Attempts to save the form and move to next intake screen
  async function attemptSave() {
    if (demo) {
      navigation.navigate("IntakeMedProvider");
    } else {
      if (fNmae == null || mNAme == null || lName == null || date == null) {
        // Error
        return;
      } else {
        const result = await createPatient(fName, mName, lName, date);
        if (result) {
          navigation.navigate("IntakeMedProvider");
        } else {
          // Error
          return;
        }
      }
    }
  }

  return (
    // Gradient Background
    <LinearGradient
      colors={styles.colors.gradient1}
      style={{ flex: 1, paddingTop: 70 }}
    >
      {/* Enable Keyboard Scrolling */}
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        {/* Page Container */}
        <View style={styles.containerNormal}>
          {/* Title */}
          <Text style={styles.text.title}>About You</Text>
          {/* Description */}
          <Text style={styles.text.paragraph}>Tell us more about you!</Text>
          {/* Spacer */}
          <View style={{ marginVertical: 10 }}></View>
          {/* Name Section Header */}
          <Text style={styles.text.sectionHeader}>Full Name</Text>
          {/* Section View */}
          <View style={styles.section}>
            {/* First Name Input */}
            <Input
              text="First Name"
              sample="John"
              changed={(text) => setFName(text)}
              req
            />
            {/* Middle Name Input */}
            <Input
              text="Middle Name"
              sample="Michael"
              changed={(text) => setMName(text)}
              req
            />
            {/* Last Name Input */}
            <Input
              text="Last Name"
              sample="Doe"
              changed={(text) => setLName(text)}
              req
            />
          </View>
          {/* Spacer */}
          <View style={{ marginVertical: 10 }}></View>
          {/* Birth Date Section Header */}
          <Text style={styles.text.sectionHeader}>Birth Date</Text>
          {/* Section View */}
          <View style={styles.section}>
            {/* Birth Date Input View */}
            <View style={{ height: 75 }}>
              {/* Birth Date Input */}
              <DatePicker />
            </View>
          </View>
          {/* Spacer */}
          <View style={{ marginVertical: 10 }}></View>
          {/* Next / Save Button */}
          <Button
            text="Next"
            textColor={styles.colors.primary}
            onPress={() => attemptSave()}
          />
          {/* Spacer */}
          <View style={{ marginVertical: 10 }}></View>
          {/* Skip Button */}
          <TouchableOpacity
            style={{ alignItems: "center", marginHorizontal: 150 }}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Text style={styles.text.subtitle}>Skip</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default CreatePatient;
