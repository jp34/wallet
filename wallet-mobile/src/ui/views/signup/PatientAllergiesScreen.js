import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { ScreenStyles, Gradients, TextStyles } from "../../Styless";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Header";
import { PrimaryButton } from "../../components/Buttons";
import CheckboxList from "../../components/CheckboxList";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PatientAllergiesScreen = ({ navigation }) => {
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const demo = useState(true);

  // Renders Intake Form
  function renderIntakeForm() {
    return (
      <View>
        {/* Title */}
        <Text style={styles.titleText}>Tell us about you!</Text>

        {/* Form */}
        <View style={styles.formGroup}>
          {/* Allergy Description */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeader}>Description</Text>
            <TextInput
              style={styles.input}
              multiline={true}
              numberOfLines={4}
              placeholder="..."
              placeholderTextColor="#fff"
              onChangeText={(text) => setDescription(text)}
            />
          </View>

          {/* Allergy Severity */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeader}>Severity</Text>
            <TextInput
              style={styles.input}
              multiline={true}
              numberOfLines={4}
              placeholder="..."
              placeholderTextColor="#fff"
              onChangeText={(text) => setSeverity(text)}
              require
            />
          </View>
        </View>
      </View>
    );
  }

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

const constants = StyleSheet.create({
  colors: {
    primary: "#6030D9",
    secondary: "#2B1360",
    gradient1: ["#2B1360", "#6030D9"],
    gradient2: ["#6030D9", "#2B1360"],
  },
});

const styles = StyleSheet.create({
  page: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 65,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  headerText: {
    marginRight: 15,
    color: "#fff",
    fontSize: 18,
  },
  headerImage: {
    width: 20,
    height: 20,
    tintColor: "#fff",
    resizeMode: "contain",
  },
  logoGradient: {
    width: 160,
    height: 160,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 50,
    alignSelf: "center",
  },
  logoText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  titleText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 30,
  },
  formGroup: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  inputGroup: {
    marginTop: 20,
  },
  inputHeader: {
    fontSize: 20,
    color: "#fff",
  },
  input: {
    marginVertical: 10,
    borderBottomColor: "#fff",
    borderBottomWidth: 1,
    height: 40,
    color: "#fff",
    fontSize: 20,
    height: 200,
    textAlignVertical: "top",
    borderWidth: 2,
    borderColor: "#fff",
  },
  saveButton: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  saveButtonText: {
    color: constants.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PatientAllergiesScreen;
