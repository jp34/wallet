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
import { createPatient } from "../api/strapi-client";

const CreatePatient = ({ navigation }) => {
    // Boolean control for SecureText
    const [firstname, setFName] = React.useState();
    const [middlename, setMName] = React.useState();
    const [lastname, setLName] = React.useState();
    const [date, setDate] = React.useState();
    const [phone, setPhone] = React.useState();
    const url = "wallet.capstone.csi.miamioh.edu:8000";

    // Renders Skip header (used for debugging purposes as of 2/4/23)
    function renderSkipHeader() {
        return (
            <TouchableOpacity
                style={styles.header}
                onPress={() => navigation.navigate("Homescreen")}
            >
                <Text style={styles.headerText}>Skip</Text>
                <Image
                    style={styles.headerImage}
                    source={require("../../assets/chevron-right.png")}
                />
            </TouchableOpacity>
        );
    }

    // Renders Intake Form
    function renderIntakeForm() {
        return (
            <View>
                {/* Title */}
                <Text style={styles.titleText}>Tell us about you!</Text>

                {/* Form */}
                <View style={styles.formGroup}>
                    
                    {/* First Name */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputHeader}>First Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="First name here"
                            placeholderTextColor="#fff"
                            onChangeText={(text) => setFName(text)}
                            require
                        />
                    </View>

                    {/* Middle name */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputHeader}>Middle Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Middle name here"
                            placeholderTextColor="#fff"
                            onChangeText={(text) => setMName(text)}
                            require
                        />
                    </View>

                    {/* Last Name */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputHeader}>Last Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Last name here"
                            placeholderTextColor="#fff"
                            onChangeText={(text) => setLName(text)}
                            require
                        />
                    </View>

                    {/* Phone number */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputHeader}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="555-555-5555"
                            //onChange={(e) => formatDate(e)} 
                            keyboardType="numeric"
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                            maxLength={10}
                            placeholderTextColor="#fff"
                            require
                        />
                    </View>
                    
                    {/* Birthdate */}
                    <View style={styles.inputGroup}>
                        <Text style={styles.inputHeader}>Birthdate</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="mm/dd/yyyy"
                            //onChange={(e) => formatDate(e)} 
                            keyboardType="numeric"
                            type="text"
                            value={date}
                            onChange={handleDateChange}
                            maxLength={8}
                            placeholderTextColor="#fff"
                            require
                        />
                    </View>
                </View>
            </View>
        );
    }

    const handleDateChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setDate(result);
      };

    const handlePhoneChange = event => {
        const result = event.target.value.replace(/\D/g, '');
        setPhone(result);
      };

      // An attempt at live formatting date input to split numbers with "/" e.g 01 / 01 / 2023
    {/* function formatDate(value) {
        if (!value) return value;

        const newDate = value;

        const dateLength = newDate.length;

        if (dateLength < 2) return newDate;

        if (dateLength < 4) {
            return `${newDate.slice(0, 2)} / ${newDate.slice(2)}`;
        }

        //return `${newDate.slice(0, 2)} / ${newDate.slice(2,4)} / ${newDate.slice(4,8)}`;
    }
    */}

    // Attempts to save the form and move to homescreen
    async function attemptSave() {
        if (firstname == null || middlename == null || lastname == null || phone == null || date == null) {
            // Temporary handle for submitting unfilled fields
            return;
        }

        try {
            const resp = await createPatient(firstname, middlename, lastname, date);
        }catch {
            console.log(error.response);
        }
        navigation.navigate("Dashboard");
    }

    // Renders Save Button
    function renderSaveButton() {
        return (
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => attemptSave()}
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
                    {renderSkipHeader()}
                    {renderIntakeForm()}
                    {renderSaveButton()}
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

export default CreatePatient;
