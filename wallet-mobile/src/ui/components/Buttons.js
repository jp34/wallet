import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

export const PrimaryButton = ({ label, options }) => {
    return (
        <TouchableHighlight style={ButtonStyles.primary} {...options}>
            <Text style={ButtonStyles.primaryText}>{label}</Text>
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
});
