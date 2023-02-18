import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ScreenStyles, Gradients } from "../Style";
import { LargeLogo } from "../components/Logos";
import { PrimaryButton } from "../components/Buttons";

const StartScreen = ({ navigation }) => {

    const renderLoginLink = () => {
        const styles = StyleSheet.create({
            container: {
                width: '100%',
                height: 32,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            },
            message: {
                color: '#eeeeee'
            },
            span: {
                paddingLeft: 8,
                color: '#2a93d5'
            }
        });
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Already have an account?</Text>
                <Text style={styles.span} onPress={() => {
                    return navigation.navigate("Login");
                }}>
                    Log In
                </Text>
            </View>
        );
    }

    return (
        <View style={ScreenStyles.screen}>
            <LinearGradient
                colors={Gradients.gradient1}
                style={ScreenStyles.gradient}
            >
                <View style={StartStyles.container}>
                    <View style={StartStyles.banner}>
                        <LargeLogo />
                    </View>
                    <View style={StartStyles.jumbotron}>
                        <Text style={StartStyles.message}></Text>
                    </View>
                    <View style={StartStyles.form}>
                        <PrimaryButton label="Get Started" options={{
                            onPress: () => {
                                return navigation.navigate('Splash');
                            }
                        }}/>
                        {renderLoginLink()}
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const StartStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 16,
        flexDirection: 'column',
    },
    banner: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    jumbotron: {
        flex: 4,
    },
    message: {
        fontSize: 50,
        color: "#ffffff"
    },
    form: {
        flex: 1,
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default StartScreen;
