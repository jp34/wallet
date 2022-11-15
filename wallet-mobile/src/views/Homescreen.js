import React from "react";
import {
    Text,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }) => {
    // Renders Logo
    function renderLogo() {
        return (
            <LinearGradient
                colors={constants.colors.gradient2}
                style={styles.logoGradient}
            >
                <Text style={styles.logoText}>JustBe</Text>
            </LinearGradient>
        );
    }

    // Renders Login Button
    function renderLoginButton() {
        return (
            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
        );
    }

    // Renders Login Button
    function renderSignupButton() {
        return (
            <TouchableOpacity
                style={styles.signupButton}
                onPress={() => navigation.navigate("Signup")}
            >
                <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
        );
    }

    return (
        <KeyboardAvoidingView style={styles.page}>
            <LinearGradient
                colors={constants.colors.gradient1}
                style={styles.container}
            >
                <ScrollView>
                    {renderLogo()}
                    {renderLoginButton()}
                    {renderSignupButton()}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

const constants = StyleSheet.create({
    colors: {
        primary: "#6030D9",
        secondary: "#2B1360",
        gradient1: ["#2B1360", "#6030D9"],
        gradient2: ["#6030D9", "#2B1360"],
    },
});

const styles = StyleSheet.create({
    page: {
        display: "flex",
        width: "100%",
        height: "100%",
    },
    container: {
        width: "100%",
        height: "100%",
    },
    logoGradient: {
        width: 160,
        height: 160,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        marginTop: 50,
        alignSelf: "center",
    },
    logoText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    loginButton: {
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        margin: 30,
    },
    loginButtonText: {
        color: constants.colors.primary,
        fontSize: 16,
        fontWeight: "bold",
    },
    signupButton: {
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        margin: 30,
    },
    signupButtonText: {
        color: constants.colors.primary,
        fontSize: 16,
        fontWeight: "bold",
    },
});
export default Login;
