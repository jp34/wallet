import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { signup } from "../api/client";
import DateTimePicker from "@react-native-community/datetimepicker";

const SignUp = ({ navigation }) => {
  // Boolean control for SecureText
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [passConfirm, setPassConfirm] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [middleName, setMiddleName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [medicalTitle, setMedicalTitle] = React.useState();
  const [medicalEmail, setMedicalEmail] = React.useState();
  const [medicalPhone, setMedicalPhone] = React.useState();

  const [formOne, setFormOne] = React.useState(true);
  const [formTwo, setFormTwo] = React.useState(false);
  const [formThree, setFormThree] = React.useState(false);
  const [formFour, setFormFour] = React.useState(false);

  // Renders Page Header
  function renderPageHeader() {
    return (
      <View>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            style={styles.headerImage}
            source={require("../../assets/chevron-left.png")}
          />
          <Text style={styles.headerText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>Sign Up</Text>
      </View>
    );
  }

  function renderPageHeader2() {
    return (
      <View>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.navigate("")}
        >
          <Image
            style={styles.headerImage}
            source={require("../../assets/chevron-left.png")}
          />
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.titleText}>Sign Up</Text>
      </View>
    );
  }

  // Renders Sign Up Form 1
  function renderSignUpForm1() {
    return (
      <View>
        {/* Form */}
        <View style={styles.formGroup}>
          {/* Account Details Section Header */}
          <Text style={styles.sectionHeader}>Account Details</Text>
          {/* Account Details Section */}
          <View style={styles.section}>
            {/* Email Input Group */}
            <View style={styles.inputGroup}>
              {/* Email Header */}
              <Text style={styles.inputHeader}>Email</Text>
              {/* Email Input */}
              <TextInput
                style={styles.input}
                placeholder="myemail@gmail.com"
                onChangeText={(text) => setEmail(text)}
                require
              />
            </View>
          </View>
          {/* Password Section Header */}
          <Text style={styles.sectionHeader}>Password</Text>
          {/* Password Section */}
          <View style={styles.section}>
            {/* Password Group */}
            <View style={styles.inputGroup}>
              {/* Password Header */}
              <Text style={styles.inputHeader}>Password</Text>
              {/* Password Input */}
              <TextInput
                style={styles.input}
                placeholder="12345"
                secureTextEntry={!showPassword}
                onChangeText={(text) => setPassword(text)}
                require
              />
              {/* See Password Opacity */}
              <TouchableOpacity
                style={styles.passwordImageArea}
                onPress={() => setShowPassword(!showPassword)}
              >
                {/* Password Lock Image */}
                <Image
                  style={styles.passwordImage}
                  source={require("../../assets/unlock.png")}
                />
              </TouchableOpacity>
            </View>
            {/* Confirm Password Group */}
            <View style={styles.inputGroup}>
              {/* Confirm Password Header */}
              <Text style={styles.inputHeader}>Confirm Password</Text>
              {/* Confirm Password Input */}
              <TextInput
                style={styles.input}
                placeholder="12345"
                secureTextEntry={!showPassword}
                onChangeText={(text) => setPassConfirm(text)}
                require
              />
              {/* See Confirm Password Opacity */}
              <TouchableOpacity
                style={styles.passwordImageArea}
                onPress={() => setShowPassword(!showPassword)}
              >
                {/* Confirm Password Lock Image */}
                <Image
                  style={styles.passwordImage}
                  source={require("../../assets/unlock.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Next Sign Up Form Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setFormOne(!formOne);
            setFormTwo(!formTwo);
          }}
        >
          {/* Button Text */}
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Renders Sign Up Form 2
  function renderSignUpForm2() {
    return (
      <View>
        {/* Form */}
        <View style={styles.formGroup}>
          {/* Full Name Section Header */}
          <Text style={styles.sectionHeader}>Full Name</Text>
          {/* Full Name Section */}
          <View style={styles.section}>
            <View style={{ flexDirection: "row" }}>
              {/* First Name Group*/}
              <View style={[styles.inputRowGroup, { marginRight: 10 }]}>
                {/* First Name Header */}
                <Text style={styles.inputHeader}>First</Text>
                {/* First Name Input */}
                <TextInput
                  style={styles.input}
                  placeholder="John"
                  onChangeText={(text) => setFirstName(text)}
                  require
                />
              </View>
              {/* Middle Name Group */}
              <View style={[styles.inputRowGroup, { marginLeft: 10 }]}>
                {/* Middle Name Header */}
                <Text style={styles.inputHeader}>Middle</Text>
                {/* Middle Name Input */}
                <TextInput
                  style={styles.input}
                  placeholder="Michael"
                  onChangeText={(text) => setMiddleName(text)}
                  require
                />
              </View>
            </View>
            {/* Last Name Group */}
            <View style={styles.inputGroup}>
              {/* Last Name Header */}
              <Text style={styles.inputHeader}>Last</Text>
              {/* Last Name Input */}
              <TextInput
                style={styles.input}
                placeholder="Doe"
                onChangeText={(text) => setLastName(text)}
              />
            </View>
          </View>
          {/* Date of Birth Section Header */}
          <Text style={styles.sectionHeader}>Date of Birth</Text>
          {/* Date of Birth Section */}
          <View style={styles.section}>
            {/* Date of Birth Group */}
            <View style={styles.inputGroup}>
              {/* Date of Birth Input */}
              <DateTimePicker value={new Date()} display="spinner" />
            </View>
          </View>
        </View>
        {/* Next Sign Up Form Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setFormTwo(!formTwo);
            setFormThree(!formThree);
          }}
        >
          {/* Button Text */}
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Renders Sign Up Form 3
  function renderSignUpForm3() {
    return (
      <View>
        {/* Form */}
        <View style={styles.formGroup}>
          {/* Medical Provider Section Header */}
          <Text style={styles.sectionHeader}>Medical Provider</Text>
          {/* Medical Provider Section */}
          <View style={styles.section}>
            {/* Title Group */}
            <View style={styles.inputGroup}>
              {/* Title Header */}
              <Text style={styles.inputHeader}>Title</Text>
              {/* Title Input */}
              <TextInput
                style={styles.input}
                placeholder="Dr. Tyler Hallman"
                onChangeText={(text) => setMedicalTitle(text)}
              />
            </View>
            {/* Email Group */}
            <View style={styles.inputGroup}>
              {/* Email Header */}
              <Text style={styles.inputHeader}>Email</Text>
              {/* Email Input */}
              <TextInput
                style={styles.input}
                placeholder="myemail@gmail.com"
                onChangeText={(text) => setMedicalEmail(text)}
              />
            </View>
            {/* Phone Num Group */}
            <View style={styles.inputGroup}>
              {/* Phone Num Header */}
              <Text style={styles.inputHeader}>Phone Number</Text>
              {/* Phone Num Input */}
              <TextInput
                style={styles.input}
                placeholder="(440) 478 - 1120"
                onChangeText={(text) => setMedicalPhone(text)}
              />
            </View>
          </View>
        </View>
        {/* Next Sign Up Form Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setFormThree(!formThree);
            setFormFour(!formFour);
          }}
        >
          {/* Button Text */}
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Renders Sign Up Form 4
  function renderSignUpForm4() {
    return (
      <View>
        {/* Form */}
        <View style={styles.formGroup}>
          {/* Allergies Section Header */}
          <Text style={styles.sectionHeader}>Allergies</Text>
          {/* Allergies Section */}
          <View style={styles.section}>
            {/* Type Group */}
            <View style={styles.inputGroup}>
              {/* Type Header */}
              <Text style={styles.inputHeader}>Type</Text>
              {/* Type Input */}
              <TextInput
                style={styles.input}
                placeholder="Gluten"
                onChangeText={(text) => setAllergyType(text)}
              />
            </View>
          </View>
        </View>
        {/* Next Sign Up Form Button */}
        <TouchableOpacity style={styles.button}>
          {/* Button Text */}
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Sign Up Function
  async function attemptSignUp() {
    if (password != passConfirm) {
      // Handle for non matching password and confirmation
      return;
    }
    const response = await signup(username, email, password);
    navigation.navigate("CreatePatient");
  }

  // Renders Signup Button
  function renderSignupButton() {
    return (
      <TouchableOpacity style={styles.button} onPress={() => attemptSignUp()}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.page}>
      <LinearGradient colors={constants.colors.gradient1} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            {renderPageHeader()}
            <View style={{ flex: 1, justifyContent: "center" }}>
              {formOne && renderSignUpForm1()}
              {formTwo && renderSignUpForm2()}
              {formThree && renderSignUpForm3()}
              {formFour && renderSignUpForm4()}
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    </View>
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
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    marginTop: 20,
    paddingLeft: 20,
  },
  headerText: {
    marginLeft: 15,
    color: "#fff",
    fontSize: 18,
  },
  headerImage: {
    width: 20,
    height: 20,
    tintColor: "#fff",
    resizeMode: "contain",
  },
  titleText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 30,
    marginBottom: 25,
    paddingTop: 40,
  },
  formGroup: {
    marginHorizontal: 30,
  },
  inputGroup: {
    marginTop: 10,
  },
  inputRowGroup: {
    marginTop: 10,
    flex: 1,
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
    fontSize: 19,
    placeholderTextColor: "#C9C9C9",
  },
  passwordImageArea: {
    position: "absolute",
    right: 0,
    bottom: 10,
    height: 30,
    width: 30,
  },
  passwordImage: {
    height: 20,
    width: 20,
    tintColor: "#fff",
  },
  button: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 30,
  },
  buttonText: {
    color: constants.colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  section: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  sectionHeader: {
    fontSize: 21,
    color: "#fff",
    fontWeight: "bold",
    padding: 5,
    marginTop: 10,
  },
});

export default SignUp;
