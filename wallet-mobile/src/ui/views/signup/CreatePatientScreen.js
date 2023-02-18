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

const CreatePatientScreen = ({ navigation }) => {

    const [firstName, setFirstName] = React.useState();
    const [middleName, setMiddleName] = React.useState();
    const [lastName, setLastName] = React.useState();
    const [birthday, setBirthday] = React.useState();

    async function attemptCreatePatient() {

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
                        onPress: () => {
                            return navigation.navigate('HomeRouter');
                        }
                    }}/>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default CreatePatientScreen;
