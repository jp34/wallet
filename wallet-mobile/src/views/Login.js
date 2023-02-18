import React from "react";
import { Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { login } from "../api/strapi-client";

import styles from "../styles";

import Logo from "../components/Logo";
import Input from "../components/Input";
import Button from "../components/Button";
import Divider from "../components/Divider";

const Login = ({ navigation }) => {
  return (
    <LinearGradient colors={styles.colors.gradient1} style={styles.container}>
      <Logo />
      <Text style={styles.text.title}>Login</Text>
      <Input text="Email / Username" sample="myemail@gmail.com" />
      <Input text="Password" sample="12345" />
      <Button
        text="Login"
        textColor={styles.colors.primary}
        onPress={() => console.log("Login Button")}
      />
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

const st = StyleSheet.create({
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
