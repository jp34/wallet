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
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  async function attemptLogin() {
    const result = await login(identifier, password);
    if (result != false) {
      navigation.navigate("Dashboard");
    } else {
      setShowStatus(true);
      renderStatus(showStatus);
    }
    console.log(identifier);
  }

  const renderStatus = (showStatus) => {
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
    <LinearGradient colors={styles.colors.gradient1} style={{ flex: 1 }}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity style={logStyle.header.view}>
            <Text
              style={logStyle.header.text}
              onPress={() => navigation.navigate("Signup")}
            >
              Sign Up
            </Text>
            <Image
              source={require("../../assets/chevron-right.png")}
              style={logStyle.header.image}
            />
          </TouchableOpacity>
          <Logo />
          <Text style={styles.text.title}>Login</Text>
          <Input
            text="Email / Username"
            sample="myemail@gmail.com"
            changed={(currText) => setIdentifier(currText)}
            req
          />
          <Input
            text="Password"
            sample="12345"
            changed={(currText) => setPassword(currText)}
            password
          />
          <Button
            text="Login"
            textColor={styles.colors.primary}
            onPress={() => attemptLogin()}
          />
          {renderStatus(showStatus)}
          <Divider text="OR" />
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
      marginBottom: 60,
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
