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
import { BasicInput, PasswordInput } from "../../components/Inputs";
import Header from "../../components/Header";
import { createAccount } from "../../../api/strapi-client";

const CreateAccountScreen = ({ navigation, route }) => {

    const confirm = route.params.agreement;
    const [email, setEmail] = React.useState();
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [showPassword, setShowPassword] = React.useState(false);
    const [passwordConfirm, setPasswordConfirm] = React.useState();
    const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

    // API Methods

    const attemptCreateAccount = async () => {
        try {
            const result = await createAccount(username, email, password, confirm);
            if (result) return navigation.navigate('CreatePatient');
            // Handle for incorrect logins
        } catch (err) {
            console.log("Create account failed with error");
            console.error(err);
            return false;
        }
    }

    // Render Methods

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
                <Text style={styles.title}>Create your account</Text>
                <BasicInput options={{
                    id: 'user-email',
                    placeholder: 'Email',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setEmail(text)
                }}/>

                <BasicInput options={{
                    id: 'user-name',
                    placeholder: 'Username',
                    placeholderTextColor: '#eeeeee',
                    require: true,
                    onChangeText: (text) => setUsername(text)
                }}/>
                
                <PasswordInput options={{
                    id: 'user-password',
                    placeholder: 'Password',
                    placeholderTextColor: '#eeeeee',
                    secureTextEntry: !showPassword,
                    require: true,
                    onChangeText: (text) => setPassword(text)
                }} onShowPassword={() => {
                    setShowPassword(!showPassword);
                }}/>

                <PasswordInput options={{
                    id: 'user-password-confirm',
                    placeholder: 'Confirm password',
                    placeholderTextColor: '#eeeeee',
                    secureTextEntry: !showPasswordConfirm,
                    require: true,
                    onChangeText: (text) => setPasswordConfirm(text)
                }} onShowPassword={() => {
                    setShowPasswordConfirm(!showPasswordConfirm);
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
                    <PrimaryButton label="Continue" options={{
                        onPress: () => attemptCreateAccount()
                    }}/>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default CreateAccountScreen;
