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

const Login = ({ navigation }) => {
  // Boolean control for SecureText
  const [showPassword, setShowPassword] = React.useState(false);

  // Renders Sign Up Header
  function renderSignUpHeader() {
    return (
      <TouchableOpacity style={styles.header}>
        <Text style={styles.headerText}>Sign Up</Text>
        <Image
          style={styles.headerImage}
          source={require("../../assets/chevron-right.png")}
        />
      </TouchableOpacity>
    );
  }

  // Renders Logo
  function renderLogo() {
    return (
      <LinearGradient
        colors={constants.colors.gradient2}
        style={styles.logoGradient}
      >
        <Text style={styles.logoText}>JustBe</Text>
      </LinearGradient>
    );
  }

  // Renders Login Form
  function renderLoginForm() {
    return (
      <View>
        {/* Title */}
        <Text style={styles.titleText}>Log In</Text>
        {/* Form */}
        <View style={styles.formGroup}>
          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="myemail@gmail.com"
              placeholderTextColor="#fff"
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

  // Renders Login Button
  function renderLoginButton() {
    return (
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
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
          {renderSignUpHeader()}
          {renderLogo()}
          {renderLoginForm()}
          {renderLoginButton()}
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
  loginButton: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  loginButtonText: {
    color: constants.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Login;