// import React, { useState } from "react";
// import { View, Text, SafeAreaView } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { login } from "../../../api/strapi-client";
// import { PrimaryButton } from "../../components/Buttons";
// import { ScreenStyles, Gradients, TextStyles } from "../../Styles";
// import Header from "../../components/Header";
// import Input from "../../components/Inputs";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// const LoginScreen = ({ navigation }) => {

//   const attemptLogin = async () => {
//     if (demo) {
//       return navigation.navigate("HomeRouter", { user: result.user });
//     }
//     try {
//       if (identifier === "") {
//         console.log("LoginScreen: Identifier Empty");
//       } else if (password === "") {
//         console.log("LoginScreen: Password Empty");
//       } else {
//         const result = await login(identifier, password);
//         if (result)
//           return navigation.navigate("HomeRouter", { user: result.user });
//       }
//     } catch (err) {
//       console.log("LoginScreen: Login Failed");
//       return;
//     }
//   };

//   return (
//     // Background Gradient
//     <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
//       {/* Padding Based on Device */}
//       <SafeAreaView style={{ flex: 1 }}>
//         {/* Screen Container */}
//         <KeyboardAwareScrollView contentContainerStyle={ScreenStyles.container}>
//           <Header navigation={navigation} />
//           <View style={ScreenStyles.nonHeaderContainer}>
//             <Text style={TextStyles.pageTitle}>Login</Text>
//             <Text style={TextStyles.pageDescription}>Welcome back.</Text>
//             <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
//               <Input
//                 text="Email / Username"
//                 changed={(newText) => setIdentifier(newText)}
//               />
//               <View style={{ marginVertical: 10 }}></View>
//               <Input
//                 text="Password"
//                 changed={(newText) => setPassword(newText)}
//                 password
//               />
//             </View>
//             <View style={{ alignItems: "center" }}>
//               <PrimaryButton
//                 text="Login"
//                 options={{
//                   onPress: () => {
//                     attemptLogin();
//                   },
//                 }}
//               />
//             </View>
//           </View>
//         </KeyboardAwareScrollView>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };

// export default LoginScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { login } from "../../../api/strapi-client";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients } from "../../Styles";
import { BasicInput, PasswordInput } from "../../components/Inputs";
import Header from "../../components/Header";

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const attemptLogin = async () => {
    try {
      const result = await login(identifier, password);
      if (result) return navigation.navigate("HomeRouter");
      // Handle for incorrect logins
    } catch (err) {
      console.log("Login failed");
      console.error(err);
      return false;
    }
  };

  const renderWelcomeMessage = () => {
    const styles = StyleSheet.create({
      container: {
        paddingVertical: 32,
        paddingHorizontal: 32,
        justifyContent: "center",
        alignItems: "flex-start",
      },
      text: {
        color: "#eeeeee",
        fontSize: 30,
        fontFamily: "Quicksand-SemiBold",
      },
    });
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome back</Text>
      </View>
    );
  };

  const renderLoginForm = () => {
    const styles = StyleSheet.create({
      form: {
        paddingVertical: 16,
        paddingHorizontal: 32,
      },
      title: {
        marginBottom: 16,
        color: "#eeeeee",
        fontSize: 20,
        fontFamily: "Quicksand-Regular",
      },
    });
    return (
      <ScrollView style={styles.form}>
        <Text style={styles.title}>Log into your account</Text>
        <BasicInput
          options={{
            id: "user-identifier",
            placeholder: "johndoe@apple.com",
            placeholderTextColor: "#eeeeee",
            require: true,
            onChangeText: (text) => setIdentifier(text),
          }}
        />

        <PasswordInput
          options={{
            id: "user-password",
            placeholder: "password",
            placeholderTextColor: "#eeeeee",
            secureTextEntry: !showPassword,
            require: true,
            onChangeText: (text) => setPassword(text),
          }}
          onShowPassword={() => {
            setShowPassword(!showPassword);
          }}
        />
      </ScrollView>
    );
  };

  return (
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      <KeyboardAvoidingView contentContainerStyle={ScreenStyles.container}>
        <Header navigation={navigation} />
        <View style={ScreenStyles.container}>
          {renderWelcomeMessage()}
          {/* {renderLoginForm()} */}
          {/* <PrimaryButton label="Log In" options={{
                        onPress: () => attemptLogin()
                    }}/> */}
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default LoginScreen;
