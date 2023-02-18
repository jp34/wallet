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
import { createPatient } from "../../../api/strapi-client";

const CreatePatientScreen = ({ navigation }) => {

    const [firstName, setFirstName] = React.useState();
    const [middleName, setMiddleName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [phone, setPhone] = React.useState();
    const [birthday, setBirthday] = React.useState();

    async function attemptCreatePatient() {
        try {
            const result = await createPatient(firstName, middleName, lastName, phone, birthday);
            if (result) return navigation.navigate('HomeRouter', { patient: result });
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
                <Text style={styles.title}>Basic Information</Text>
                <BasicInput options={{
                    id: 'user-first',
                    placeholder: 'First name',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setFirstName(text)
                }}/>

                <BasicInput options={{
                    id: 'user-middle',
                    placeholder: 'Middle Name',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setMiddleName(text)
                }}/>

                <BasicInput options={{
                    id: 'user-last',
                    placeholder: 'Last name',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setLastName(text)
                }}/>

                <BasicInput options={{
                    id: 'user-phone',
                    placeholder: 'Phone',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setPhone(text)
                }}/>

                <BasicInput options={{
                    id: 'user-birthday',
                    placeholder: 'Birthday',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setBirthday(text)
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
                    <PrimaryButton label="Finish" options={{
                        onPress: () => attemptCreatePatient()
                    }}/>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default CreatePatientScreen;
