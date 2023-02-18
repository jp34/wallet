import React from "react";
import { View, TouchableOpacity, Image, TextInput, StyleSheet } from "react-native";

export const BasicInput = ({ options }) => {
    return (
        <View style={InputStyles.container}>
            <TextInput {...options} style={InputStyles.input}/>
        </View>
    );
}

export const PasswordInput = ({ options, onShowPassword }) => {
    const styles = StyleSheet.create({
        showButton: {
            position: "absolute",
            right: 0,
            bottom: 10,
            height: 30,
            width: 30,
        },
        icon: {
            height: 20,
            width: 20,
            tintColor: "#fff",
        },
    });
    return (
        <View style={InputStyles.container}>
            <TextInput {...options} style={InputStyles.input}/>
            <TouchableOpacity
                style={styles.showButton}
                onPress={() => onShowPassword()}
            >
                <Image
                    style={styles.icon}
                    source={require("../../../assets/icons/unlock.png")}
                />
            </TouchableOpacity>
        </View>
    );
}

const InputStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginBottom: 16,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    input: {
        width: "100%",
        padding: 8,
        paddingLeft: 10,
        color: '#eeeeee',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    }
});
