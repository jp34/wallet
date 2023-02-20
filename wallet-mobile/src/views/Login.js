import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { login } from "../api/strapi-client";
import styles from "../styles";
import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Divider from "../components/Divider";

const Login = ({ navigation }) => {
  // Constants
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const [demo, setDemo] = useState(true);

  // Function for API Login
  async function attemptLogin() {
    // If demoing ... skip Login
    if (demo) {
      navigation.navigate("Dashboard");
    } else {
      // Attempt Login
      const result = await login(identifier, password);
      if (result != false) {
        navigation.navigate("Dashboard");
      } else {
        setShowStatus(true);
        renderStatus(showStatus);
      }
    }
  }

  // Render Status of Login
  const renderStatus = (showStatus) => {
    // If enabled ... display status view.
    if (showStatus) {
      return (
        <View style={logStyle.status.view}>
          <Text style={logStyle.status.text}>Login Failed</Text>
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
          {/* Sign Up Header */}
          <TouchableOpacity
            style={logStyle.header.view}
            onPress={() => navigation.navigate("Signup")}
          >
            {/* Header Text */}
            <Text style={logStyle.header.text}>Sign Up</Text>
            {/* Header Image */}
            <Image
              source={require("../../assets/chevron-right.png")}
              style={logStyle.header.image}
            />
          </TouchableOpacity>
          {/* JustBe Logo */}
          <Logo />
          {/* Title */}
          <Text style={styles.text.title}>Login</Text>
          {/* Email / Username Input */}
          <Input
            text="Email / Username"
            sample="myemail@gmail.com"
            changed={(currText) => setIdentifier(currText)}
            req
          />
          {/* Password Input */}
          <Input
            text="Password"
            sample="12345"
            changed={(currText) => setPassword(currText)}
            password
          />
          {/* Login Button */}
          <Button
            text="Login"
            textColor={styles.colors.primary}
            onPress={() => attemptLogin()}
          />
          {/* Login Status */}
          {renderStatus(showStatus)}
          {/* Button Divider */}
          <Divider text="OR" />
          {/* Metamask Button */}
          <Button
            text="Login with MetaMask"
            imgSource={require("../../assets/fox.png")}
            textColor="#F6851B"
            backColor="#F6851B"
            onPress={() => console.log("MetaMask Button")}
          />
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

const logStyle = StyleSheet.create({
  status: {
    view: {
      backgroundColor: "rgba(255, 51, 51, 0.4)",
      marginHorizontal: 60,
      marginTop: 10,
      alignItems: "center",
      borderRadius: 10,
    },
    text: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 18,
      marginVertical: 10,
    },
  },
  header: {
    view: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 20,
      justifyContent: "flex-end",
      paddingBottom: 50,
    },
    text: {
      marginRight: 15,
      color: "#fff",
      fontSize: 20,
    },
    image: {
      width: 20,
      height: 20,
      tintColor: "#fff",
      resizeMode: "contain",
    },
  },
});
export default Login;
