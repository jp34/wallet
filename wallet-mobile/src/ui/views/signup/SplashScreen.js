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
import Header from "../../components/Header";

const SplashScreen = ({ navigation }) => {

    const renderSplashContent = () => {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
            },
            group: {
                marginHorizontal: 8,
                marginVertical: 16,
            },
            h: {
                color: '#eeeeee',
                fontSize: 18,
                fontFamily: 'Quicksand-SemiBold'
            },
            p: {
                color: '#eeeeee',
                fontSize: 14,
                fontFamily: 'Quicksand-Regular'
            }
        });
        return (
            <ScrollView style={styles.container}>
                <View style={styles.group}>
                    <Text style={styles.h}>What is JustBe?</Text>
                    <Text style={styles.p}>
                        This is some text
                    </Text>
                </View>
                <View style={styles.group}>
                    <Text style={styles.h}>How can I use it?</Text>
                    <Text style={styles.p}>
                        This is some text
                    </Text>
                </View>
            </ScrollView>
        );
    }

    return (
        <KeyboardAvoidingView style={ScreenStyles.screen}>
            <LinearGradient
                colors={Gradients.gradient1}
                style={ScreenStyles.gradient}
            >
                <Header navigation={navigation} />
                <View style={ScreenStyles.container}>
                    {renderSplashContent()}
                    <PrimaryButton label="Continue" options={{
                        onPress: () => {
                            return navigation.navigate('Agreement');
                        }
                    }}/>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

export default SplashScreen;
