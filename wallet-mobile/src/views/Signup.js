import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { signup } from "../api/strapi-client";

const Signup = ({ navigation }) => {
  // Boolean control for SecureText
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [passConfirm, setPassConfirm] = React.useState();

  // Renders Login Header
  function renderLoginHeader() {
    return (
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
    );
  }

  // Renders Signup Form
  function renderSignupForm() {
    return (
      <View>
        {/* Title */}
        <Text style={styles.titleText}>Sign Up</Text>

        {/* Form */}
        <View style={styles.formGroup}>
          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="myemail@gmail.com"
              placeholderTextColor="#fff"
              onChangeText={(text) => setEmail(text)}
              require
            />
          </View>

          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeader}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="username"
              placeholderTextColor="#fff"
              onChangeText={(text) => setUsername(text)}
              require
            />
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeader}>Password</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#fff"
              placeholder="12345"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
              require
            />
            <TouchableOpacity
              style={styles.passwordImageArea}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                style={styles.passwordImage}
                source={require("../../assets/unlock.png")}
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeader}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#fff"
              placeholder="12345"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassConfirm(text)}
              require
            />
            <TouchableOpacity
              style={styles.passwordImageArea}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image
                style={styles.passwordImage}
                source={require("../../assets/unlock.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  async function attemptSignup() {
    if (password != passConfirm) {
      // Handle for non matching password and confirmation
      return;
    }
    const response = await signup(username, email, password);
    navigation.navigate("CreatePatient");
  }

  // Renders Login Button
  function renderSignupButton() {
    return (
      <TouchableOpacity
        style={styles.signupButton}
        onPress={() => attemptSignup()}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.page}>
      <LinearGradient
        colors={constants.colors.gradient1}
        style={styles.container}
      >
        <ScrollView>
          {renderLoginHeader()}
          {renderSignupForm()}
          {renderSignupButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
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
    justifyContent: "flex-start",
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
  signupButton: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  signupButtonText: {
    color: constants.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Signup;
