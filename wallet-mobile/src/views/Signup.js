import React, { useState } from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { signup } from "../api/strapi-client";
import styles from "../styles";
import Input from "../components/Input";
import Button from "../components/Button";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = useState();
  const [passConfirm, setPassConfirm] = useState();

  async function attemptSignUp() {
    if (password != passConfirm) {
      return;
    } else {
      const result = await signup(username, email, password);
      if (result != false) {
        navigation.navigate("CreatePatient");
      } else {
        return;
      }
    }
  }

  return (
    <LinearGradient colors={styles.colors.gradient1} style={{ flex: 1 }}>
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.containerNormal}>
          <Text style={styles.text.title}>Sign Up</Text>
          <Text style={styles.text.paragraph}>Let's your JustBe account.</Text>
          <View style={{ marginVertical: 10 }}></View>
          <Text style={styles.text.sectionHeader}>Email / Username</Text>
          <View style={styles.section}>
            <Input
              text="Email"
              sample="myemail@gmail.com"
              changed={(currText) => setEmail(currText)}
              req
            />
            <Input
              text="Username"
              sample="jdoe3"
              changed={(currText) => setUsername(currText)}
              req
            />
          </View>
          <View style={{ marginVertical: 10 }}></View>
          <Text style={styles.text.sectionHeader}>Password</Text>
          <View style={styles.section}>
            <Input
              text="Password"
              sample="12345"
              changed={(currText) => setPassword(currText)}
              password
              req
            />
            <Input
              text="Verify Password"
              sample="12345"
              changed={(currText) => setPassConfirm(currText)}
              password
              req
            />
          </View>
          <View style={{ marginVertical: 10 }}></View>
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

export default Signup;
