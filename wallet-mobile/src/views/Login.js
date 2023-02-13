import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { login } from "../api/strapi-client";

const Login = ({ navigation }) => {
  // Boolean control for SecureText
  const [showPassword, setShowPassword] = React.useState(false);
  const [identifier, setIdentifier] = React.useState();
  const [password, setPassword] = React.useState();

  // Renders Sign Up Header
  function renderSignUpHeader() {
    return (
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.navigate("Signup")}
      >
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
        {/* Metamask Login */}
        <TouchableOpacity style={styles.metamaskButton}>
          <Image
            source={require("../../assets/fox.png")}
            style={styles.metamaskLogo}
          />
          <Text style={styles.loginButtonText}>Log In via MetaMask</Text>
        </TouchableOpacity>
        {/* Divider */}
        <View style={styles.dividerGroup}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>
        {/* Form */}
        <View style={styles.formGroup}>
          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeader}>Email / Username</Text>
            <TextInput
              id="user-identifier"
              style={styles.input}
              placeholder="myemail@gmail.com"
              onChangeText={(text) => setIdentifier(text)}
              require
            />
          </View>
          {/* Password */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputHeader}>Password</Text>
            <TextInput
              id="user-password"
              style={styles.input}
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
        </View>
      </View>
    );
  }

  async function attemptLogin() {
    const result = await login(identifier, password);
    if (result != false) {
      navigation.navigate("Dashboard");
    } else {
      // Invalid login provided, should notify user
      console.log("Login failed");
    }
  }

  // Renders Login Button
  function renderLoginButton() {
    return (
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => attemptLogin()}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.page}>
      <LinearGradient colors={constants.colors.gradient1} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
          >
            {renderSignUpHeader()}
            <View style={{ justifyContent: "center", flex: 1 }}>
              {renderLogo()}
              {renderLoginForm()}
              {renderLoginButton()}
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
    height: "100%",
    width: "100%",
    display: "flex",
  },
  header: {
    flexDirection: "row",
    paddingRight: 20,
    justifyContent: "flex-end",
    marginTop: 20,
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
    marginHorizontal: 30,
  },
  inputGroup: {
    marginTop: 10,
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
  loginButton: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  loginButtonText: {
    color: constants.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  metamaskButton: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 15,
    flexDirection: "row",
  },
  dividerGroup: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
    marginTop: 20,
  },
  dividerLine: {
    backgroundColor: "white",
    flex: 1,
    height: 2,
    marginHorizontal: 15,
  },
  dividerText: {
    color: "white",
    marginHorizontal: 5,
    fontWeight: "bold",
    fontSize: 16,
  },
  metamaskLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 15,
  },
});
export default Login;
