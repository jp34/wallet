import React from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Homescreen = ({ navigation }) => {
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

  // Renders Login Button
  function renderLoginButton() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
    );
  }

  // Renders Login Button
  function renderSignupButton() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.page}>
      <LinearGradient colors={constants.colors.gradient1} style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
            {renderLogo()}
            {renderLoginButton()}
            {renderSignupButton()}
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
  button: {
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 5 
  },
  loginButtonText: {
    color: constants.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
  signupButtonText: {
    color: constants.colors.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Homescreen;
