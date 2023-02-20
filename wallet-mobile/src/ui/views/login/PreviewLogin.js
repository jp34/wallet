import React from "react";
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
import { ScreenStyles, Gradients, TextStyles } from "../../Styless";
import { BasicInput, PasswordInput } from "../../components/Inputs";
import Header from "../../components/Header";
import Input from "../../components/Input";

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [identifier, setIdentifier] = React.useState();
  const [password, setPassword] = React.useState();

  // const attemptLogin = async () => {
  //     try {
  //         const result = await login(identifier, password);
  //         if (result) return navigation.navigate('HomeRouter', { user: result.user });
  //         // Handle for incorrect logins
  //     } catch (err) {
  //         console.log("Login failed");
  //         console.error(err);
  //         return false;
  //     }
  // }

//   const renderWelcomeMessage = () => {
//     const styles = StyleSheet.create({
//       container: {
//         paddingVertical: 32,
//         paddingHorizontal: 32,
//         justifyContent: "center",
//         alignItems: "flex-start",
//       },
//       text: {
//         color: "#eeeeee",
//         fontSize: 30,
//         fontFamily: "Quicksand-SemiBold",
//       },
//     });
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Welcome back</Text>
//       </View>
//     );
//   };

//   const renderLoginForm = () => {
//     const styles = StyleSheet.create({
//       form: {
//         paddingVertical: 16,
//         paddingHorizontal: 32,
//       },
//       title: {
//         marginBottom: 16,
//         color: "#eeeeee",
//         fontSize: 20,
//         fontFamily: "Quicksand-Regular",
//       },
//     });
//     return (
//       <ScrollView style={styles.form}>
//         <Text style={styles.title}>Log into your account</Text>
//         <BasicInput
//           options={{
//             id: "user-identifier",
//             placeholder: "johndoe@apple.com",
//             placeholderTextColor: "#eeeeee",
//             require: true,
//             onChangeText: (text) => setIdentifier(text),
//           }}
//         />

//         <PasswordInput
//           options={{
//             id: "user-password",
//             placeholder: "password",
//             placeholderTextColor: "#eeeeee",
//             secureTextEntry: !showPassword,
//             require: true,
//             onChangeText: (text) => setPassword(text),
//           }}
//           onShowPassword={() => {
//             setShowPassword(!showPassword);
//           }}
//         />
//       </ScrollView>
//     );
//   };

  return (
    // Background Gradient
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      {/* Padding Based on Device */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Screen Container */}
        <View style={ScreenStyles.container}>
          <Header navigation={navigation} />
          <View style={ScreenStyles.nonHeaderContainer}>
            <Text style={TextStyles.pageTitle}>Login</Text>
            <Text style={TextStyles.pageDescription}>Welcome back!</Text>
            <View style={{marginVertical: 10, flex: 1, marginHorizontal: 20}}>
              <Input
                text="Email / Username"
                sample="myemail@gmail.com"
                changed={(newText) => setIdentifier(newText)}
              />
              <Input
                text="Password"
                sample="12345"
                changed={(newText) => setPassword(newText)}
                password
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>

    //             {renderWelcomeMessage()}
    //             {renderLoginForm()}
    //             <PrimaryButton label="Log In" options={{
    //                 onPress: () => attemptLogin()
    //             }}/>
    //         </View>
    //     </LinearGradient>
    // </KeyboardAvoidingView>
  );
};

export default LoginScreen;
