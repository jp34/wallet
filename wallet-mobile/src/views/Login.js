import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import { login } from "../api/strapi-client";
import styles from "../styles";

const Login = ({ navigation }) => {
  // Boolean control for SecureText
  const [showPassword, setShowPassword] = React.useState(false);
  const [identifier, setIdentifier] = React.useState();
  const [password, setPassword] = React.useState();

  // // Renders Sign Up Header
  // function renderSignUpHeader() {
  //     return (
  //         <TouchableOpacity
  //             style={styles.header}
  //             onPress={() => navigation.navigate("Signup")}
  //         >
  //             <Text style={styles.headerText}>Sign Up</Text>
  //             <Image
  //                 style={styles.headerImage}
  //                 source={require("../../assets/chevron-right.png")}
  //             />
  //         </TouchableOpacity>
  //     );
  // }

  // // Renders Login Form
  // function renderLoginForm() {
  //     return (
  //         <View>
  //             {/* Title */}
  //             <Text style={styles.titleText}>Log In</Text>
  //             {/* Form */}
  //             <View style={styles.formGroup}>
  //                 {/* Password */}
  //                 <View style={styles.inputGroup}>
  //                     <Text style={styles.inputHeader}>Password</Text>
  //                     <TextInput
  //                         id="user-password"
  //                         style={styles.input}
  //                         placeholderTextColor="#fff"
  //                         placeholder="12345"
  //                         secureTextEntry={!showPassword}
  //                         onChangeText={(text) => setPassword(text)}
  //                         require
  //                     />
  //                     <TouchableOpacity
  //                         style={styles.passwordImageArea}
  //                         onPress={() => setShowPassword(!showPassword)}
  //                     >
  //                         <Image
  //                             style={styles.passwordImage}
  //                             source={require("../../assets/unlock.png")}
  //                         />
  //                     </TouchableOpacity>
  //                 </View>
  //             </View>
  //         </View>
  //     );
  // }

  // async function attemptLogin() {
  //     const result = await login(identifier, password);
  //     if (result != false) {
  //         navigation.navigate("Dashboard");
  //     } else {
  //         // Invalid login provided, should notify user
  //         console.log("Login failed");
  //     }
  // }

  // // Renders Login Button
  // function renderLoginButton() {
  //     return (
  //         <TouchableOpacity
  //             style={styles.loginButton}
  //             onPress={() => attemptLogin()}
  //         >
  //         </TouchableOpacity>
  //     );
  // }

  return (
    <LinearGradient colors={styles.colors.gradient1} style={styles.container}>
      <Logo />
      <View style={{ marginVertical: 20 }} />
      <Input text="Email / Username" placeholder="myemail@gmail.com" />
      <Input text="Password" placeholder="12345" />
      <Button text="Login" textColor={styles.colors.primary} />
      <Divider text="OR" />
      <Button
        text="Login with MetaMask"
        imgSource={require("./assets/fox.png")}
        textColor="#F6851B"
        backColor="#F6851B"
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
  titleText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 30,
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
