import React from "react";
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients } from "../../Style";
import { BasicInput } from "../../components/Inputs";
import Header from "../../components/Header";
import { createPatientMedication } from "../../../api/strapi-client";

const MedicationIntakeScreen = ({ navigation }) => {

    const [name, setName] = React.useState();
    const [dosage, setDosage] = React.useState();
    const [frequency, setFrequency] = React.useState();

    async function attemptCreateAllergy() {
        try {
            // const result = await createPatientAllergy(patientId, description, severity);
            // if (result) 
            return navigation.navigate('HomeRouter');
            // Handle for incorrect logins
        } catch (err) {
            console.log("Create account failed with error");
            console.error(err);
            return false;
        }
    }

    const renderForm = () => {
        const styles = StyleSheet.create({
            form: {
                paddingVertical: 16,
                paddingHorizontal: 32,
            },
            title: {
                marginLeft: 8,
                marginBottom: 16,
                color: '#eeeeee',
                fontSize: 20,
                fontFamily: 'Quicksand-Regular',
            }
        });
        return (
            <ScrollView style={styles.form}>
                <Text style={styles.title}>Record a Medication</Text>
                <BasicInput options={{
                    placeholder: 'Description',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setDescription(text)
                }}/>

                <BasicInput options={{
                    placeholder: 'Severity',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setSeverity(text)
                }}/>

                <BasicInput options={{
                    placeholder: 'Frequency',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setFrequency(text)
                }}/>
            </ScrollView>
        );
    }

    return (
        <KeyboardAvoidingView style={ScreenStyles.screen}>
            <LinearGradient
                colors={Gradients.gradient1}
                style={ScreenStyles.gradient}
            >
                <Header navigation={navigation}/>
                <View style={ScreenStyles.container}>
                    {renderForm()}
                    <PrimaryButton label="Next" options={{
                        onPress: () => attemptCreateAllergy()
                    }}/>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default MedicationIntakeScreen;