import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { ScreenStyles, Gradients, TextStyles } from "../../Styles";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header";
import { PrimaryButton } from "../../components/Buttons";
import CheckboxList from "../../components/CheckboxList";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PatientAllergiesScreen = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const demo = useState(true);

  async function attemptPatientAllergies() {
    if (demo) {
      navigation.navigate("PatientEncounters");
    }
  }

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
            <Text style={TextStyles.page.header}>Allergies</Text>
            <Text style={TextStyles.page.description}>
              Do you have any know allergies?
            </Text>
            <Text style={TextStyles.page.description}>
              Select all that apply.
            </Text>
            <View style={{ marginVertical: 10 }}></View>
            {/* Checklist Section */}
            <View style={ScreenStyles.sectionContainer}>
              {/* Checklist */}
              <CheckboxList options={["Gluten", "Peanuts", "None"]} />
            </View>
            <View style={{ marginVertical: 10 }}></View>
            <Text style={TextStyles.page.description}>Severity?</Text>
            <View style={ScreenStyles.sectionContainer}>
              <TextInput
                style={{
                  borderColor: "#EEE",
                  height: 40,
                  color: "#EEE",
                  fontSize: 18,
                  height: 200,
                  textAlignVertical: "top",
                  borderWidth: 0.5,
                  borderColor: "#EEE",
                  borderRadius: 10,
                  padding: 10,
                  fontFamily: "Quicksand-Regular",
                }}
                multiline={true}
                numberOfLines={4}
                placeholder="..."
                placeholderTextColor="#fff"
                onChangeText={(text) => setSeverity(text)}
                require
              />
            </View>
          </View>
          <PrimaryButton
            text="Continue"
            options={{
              onPress: () => attemptPatientAllergies(),
            }}
          />
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default PatientAllergiesScreen;
