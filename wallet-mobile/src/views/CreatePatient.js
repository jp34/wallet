import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  DatePickerIOSBase,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createPatient } from "../api/strapi-client";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "../styles";
import Input from "../components/Input";
import Button from "../components/Button";
import DatePicker from "../components/DatePicker";

const CreatePatient = ({ navigation }) => {
  // Boolean control for SecureText
  const [firstname, setFName] = useState("");
  const [middlename, setMName] = useState("");
  const [lastname, setLName] = useState("");
  const [date, setDate] = useState("");
  const url = "wallet.capstone.csi.miamioh.edu:8000";

  // Renders Skip header (used for debugging purposes as of 2/4/23)
  function renderSkipHeader() {
    return (
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("Homescreen")}
      >
        <Text style={styles.headerText}>Skip</Text>
        <Image
          style={styles.headerImage}
          source={require("../../assets/chevron-right.png")}
        />
      </TouchableOpacity>
    );
  }

  // Renders Intake Form
  function renderIntakeForm() {
    return (
      <View style={styles.formGroup}>
        {/* Birthdate */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputHeader}>Birthdate</Text>
          <TextInput
            style={styles.input}
            placeholder="mm/dd/yyyy"
            //onChange={(e) => formatDate(e)}
            keyboardType="numeric"
            type="text"
            value={date}
            onChange={handleDateChange}
            maxLength={8}
            placeholderTextColor="#fff"
            require
          />
        </View>
      </View>
    );
  }

  const handleDateChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setDate(result);
  };

  const handlePhoneChange = (event) => {
    const result = event.target.value.replace(/\D/g, "");
    setPhone(result);
  };

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
    if (
      firstname == null ||
      middlename == null ||
      lastname == null ||
      date == null
    ) {
      // Temporary handle for submitting unfilled fields
      return;
    }

    const resp = await createPatient(firstname, middlename, lastname, date);
    navigation.navigate("IntakeMedProvider");
  }

  // Renders Save Button
  function renderSaveButton() {
    return (
      <TouchableOpacity style={styles.saveButton} onPress={() => attemptSave()}>
        <Text style={styles.saveButtonText}>Next</Text>
      </TouchableOpacity>
    );
  }

  return (
    //             {renderSkipHeader()}
    //             {renderIntakeForm()}
    //             {renderSaveButton()}

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
            {/* Birth Date Input */}
            <View style={{height: 75}}><DatePicker/></View>
          </View>
          <View style={{ marginVertical: 10 }}></View>
          <Button text="Next" textColor={styles.colors.primary} />
        </View>
      </KeyboardAwareScrollView>
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

const style = StyleSheet.create({
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

export default CreatePatient;
