import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients } from "../../Style";
import Checkbox from "expo-checkbox";
import Header from "../../components/Header";

const AgreementScreen = ({ navigation }) => {

    const [confirm, setConfirm] = React.useState(false);

    const renderAgreement = () => {
        const styles = StyleSheet.create({
            container: {
                width: '100%',
            },
            text: {
                paddingVertical: 16,
                paddingHorizontal: 16,
                backgroundColor: '#eeeeee',
                borderWidth: 1,
                borderColor: '#cccccc',
                borderRadius: 8,
            },
            title: {
                marginVertical: 16,
                color: '#eeeeee',
                fontSize: 24,
                fontFamily: 'Quicksand-Regular',
            },
            confirmContainer: {
                paddingVertical: 16,
                paddingHorizontal: 8,
                flexDirection: 'row',
                alignItems: 'center',
            },
            confirm: {
                width: 15,
                height: 15,
                margin: 4,
            },
            confirmLabel: {
                color: '#eeeeee',
                fontSize: 18,
                fontFamily: 'Quicksand-Regular',
            },
        });
        const options = {
            style: styles.text,
            multiline: true,
            numberOfLines: 15,
            editable: false,
            placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        };
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Terms & Conditions</Text>
                <TextInput {...options} />
                <View style={styles.confirmContainer}>
                    <Checkbox value={confirm} onValueChange={setConfirm} style={styles.confirm}/>
                    <Text style={styles.confirmLabel}>I agree</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={ScreenStyles.screen}>
            <LinearGradient
                colors={Gradients.gradient1}
                style={ScreenStyles.gradient}
            >
                <Header navigation={navigation} />
                <View style={ScreenStyles.container}>
                    <View style={AgreementStyles.agreement}>
                        {renderAgreement()}
                    </View>
                    <PrimaryButton label="Continue" options={{
                        onPress: () => {
                            return navigation.navigate('CreateAccount');
                        },
                        disabled: !confirm,
                    }} />
                </View>
            </LinearGradient>
        </View>
    );
};

const AgreementStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    agreement: {
        flex: 8,
    },
});

export default AgreementScreen;
