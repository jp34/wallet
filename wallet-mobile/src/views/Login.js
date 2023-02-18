import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { login } from "../api/strapi-client";
import styles from "../styles";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Divider from "../components/Divider";

const Login = ({ navigation }) => {
  const [identifier, setIdentifier] = useState();
  const [password, setPassword] = useState();
  const [showStatus, setShowStatus] = useState(false);

  async function attemptLogin() {
    const result = await login(identifier, password);
    if (result != false) {
      navigation.navigate("Dashboard");
    } else {
      setShowStatus(!showStatus);
      renderStatus(showStatus);
    }
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
    <LinearGradient colors={styles.colors.gradient1} style={styles.container}>
      <Logo />
      <Text style={styles.text.title}>Login</Text>
      <Input
        text="Email / Username"
        sample="myemail@gmail.com"
        id="identifier"
      />
      <Input text="Password" sample="12345" id="pass" />
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
    </LinearGradient>
  );
};

const logStyle = StyleSheet.create({
  status: {
    view: {
      backgroundColor: "rgba(255, 51, 51, 0.5)",
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
});
export default Login;
