import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

export const PrimaryButton = ({ label, options }) => {
    return (
        <TouchableHighlight style={ButtonStyles.primary} {...options}>
            <Text style={ButtonStyles.primaryText}>{label}</Text>
        </TouchableHighlight>
    );
}

export const SecondaryButton = ({ label, options }) => {
    return (
        <TouchableHighlight style={ButtonStyles.secondary} {...options}>
            <Text style={ButtonStyles.secondaryText}>{label}</Text>
        </TouchableHighlight>
    );
}

const ButtonStyles = StyleSheet.create({
    primary: {
        width: '100%',
        height: 48,
        paddingVertical: 8,
        paddingHorizontal: 64,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#eeeeee',
        borderRadius: 8,
    },
    primaryText: {
        color: '#eeeeee',
        fontSize: 20,
    },
    secondary: {
        width: '100%',
        height: 48,
        paddingVertical: 8,
        paddingHorizontal: 64,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6030D9',
        borderRadius: 8,
    },
    secondaryText: {
        color: '#eeeeee',
        fontSize: 20,
    },
});
