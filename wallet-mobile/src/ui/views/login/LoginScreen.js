import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { login } from "../../../api/strapi-client";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients, TextStyles } from "../../Styless";
import Header from "../../components/Header";
import Input from "../../components/Inputs";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const LoginScreen = ({ navigation }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const demo = useState(true);

  const attemptLogin = async () => {
    if (demo) {
      return navigation.navigate("HomeRouter", { user: result.user });
    }
    try {
      if (identifier === "") {
        console.log("LoginScreen: Identifier Empty");
      } else if (password === "") {
        console.log("LoginScreen: Password Empty");
      } else {
        const result = await login(identifier, password);
        if (result)
          return navigation.navigate("HomeRouter", { user: result.user });
      }
    } catch (err) {
      console.log("LoginScreen: Login Failed");
      return;
    }
  };

  return (
    // Background Gradient
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      {/* Padding Based on Device */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Screen Container */}
        <KeyboardAwareScrollView contentContainerStyle={ScreenStyles.container}>
          <Header navigation={navigation} />
          <View style={ScreenStyles.nonHeaderContainer}>
            <Text style={TextStyles.pageTitle}>Login</Text>
            <Text style={TextStyles.pageDescription}>Welcome back.</Text>
            <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
              <Input
                text="Email / Username"
                changed={(newText) => setIdentifier(newText)}
              />
              <View style={{ marginVertical: 10 }}></View>
              <Input
                text="Password"
                changed={(newText) => setPassword(newText)}
                password
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <PrimaryButton
                text="Login"
                options={{
                  onPress: () => {
                    attemptLogin();
                  },
                }}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
