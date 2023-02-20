import React from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const TermsConditions = ({ navigation }) => {
    // Boolean control for SecureText
    const url = "wallet.capstone.csi.miamioh.edu:8000";

    // Renders Intake Form
    function renderIntakeForm() {
        return (
            <View>
                {/* Title */}
                <Text style={styles.titleText}>Terms and Conditions</Text>

                <View style={styles.formGroup}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputHeader }> Lorem Ipsum</Text>
                    </View>
                </View>
                
            </View>
        );
    }

    // Attempts to save the form and move to homescreen
    async function attemptAccept() {

        // const resp = await createPatient(firstname, middlename, lastname, date);
        // New client method needed with endpoint
        navigation.navigate("Dashboard");
    }

    // Renders Save Button
    function renderAcceptButton() {
        return (
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => attemptAccept()}
            >
                <Text style={styles.saveButtonText}>Save</Text>
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
                    {renderIntakeForm()}
                    {renderAcceptButton()}
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
    titleText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 30,
        marginLeft: 30,
    },
    formGroup: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    inputGroup: {
        marginTop: 20,
    },
    inputHeader: {
        fontSize: 20,
        color: "#fff",
    },
    input: {
        marginVertical: 10,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        height: 40,
        color: "#fff",
        fontSize: 20,
    },
    saveButton: {
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        margin: 30,
    },
    saveButtonText: {
        color: constants.colors.primary,
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default TermsConditions;
