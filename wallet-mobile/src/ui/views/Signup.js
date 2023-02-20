import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signup } from "../../api/strapi-client";
import styles from "../../styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup = ({ navigation }) => {
  // Constants
  const [email, setEmail] = useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const demo = useState(true);

  // Function for API Sign Up
  async function attemptSignUp() {
    // If demoing... skip Sign Up
    if (demo) {
      // Check Fields
      if (email === "") {
        console.log("Email Empty");
      } else if (username === "") {
        console.log("Username Empty");
      } else if (password === "") {
        console.log("Password Empty");
      } else if (passConfirm === "") {
        console.log("Pass Confirm Empty");
      } else if (password != passConfirm) {
        console.log("Passwords Do Not Match");
      } else {
        navigation.navigate("CreatePatient");
      }
    } else {
      // Check Fields
      if (email === "") {
        console.log("Email Empty");
      } else if (username === "") {
        console.log("Username Empty");
      } else if (password === "") {
        console.log("Password Empty");
      } else if (passConfirm === "") {
        console.log("Pass Confirm Empty");
      } else if (password != passConfirm) {
        console.log("Passwords Do Not Match");
      } else {
        // Attempt Sign Up
        const result = await signup(username, email, password);
        if (result != false) {
          navigation.navigate("CreatePatient");
        } else {
          setShowStatus(true);
          renderStatus(showStatus);
        }
      }
    }
  }

  // Render Status of Sign Up
  const renderStatus = (showStatus) => {
    // If enabled ... display status view.
    if (showStatus) {
      return (
        <View style={signStyle.view}>
          <Text style={signStyle.text}>Sign Up Failed</Text>
        </View>
      );
    } else {
      return <View></View>;
    }
  };

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
          <Text style={styles.text.title}>Sign Up</Text>
          {/* Description */}
          <Text style={styles.text.paragraph}>
            Let's create your JustBe account.
          </Text>
          {/* Spacer */}
          <View style={{ marginVertical: 10 }}></View>
          {/* Email Section Header */}
          <Text style={styles.text.sectionHeader}>Email / Username</Text>
          {/* Section View */}
          <View style={styles.section}>
            {/* Email Input */}
            <Input
              text="Email"
              sample="myemail@gmail.com"
              changed={(newText) => setEmail(newText)}
            />
            {/* Username Input */}
            <Input
              text="Username"
              sample="jdoe3"
              changed={(newText) => setUsername(newText)}
              req
            />
          </View>
          {/* Spacer */}
          <View style={{ marginVertical: 10 }}></View>
          {/* Password Section Header */}
          <Text style={styles.text.sectionHeader}>Password</Text>
          {/* Section View */}
          <View style={styles.section}>
            {/* Password Input */}
            <Input
              text="Password"
              sample="12345"
              changed={(newText) => setPassword(newText)}
              password
              req
            />
            {/* Verify Password Input */}
            <Input
              text="Verify Password"
              sample="12345"
              changed={(newText) => setPassConfirm(newText)}
              password
              req
            />
          </View>
          {/* Sign Up Status  */}
          {renderStatus(showStatus)}
          {/* Spacer */}
          {!showStatus && <View style={{ marginVertical: 10 }}></View>}
          {/* Sign Up Button */}
          <Button
            text="Sign Up"
            textColor={styles.colors.primary}
            onPress={() => attemptSignUp()}
          />
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

const signStyle = StyleSheet.create({
  view: {
    backgroundColor: "rgba(255, 51, 51, 0.4)",
    marginHorizontal: 60,
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
});

export default Signup;
