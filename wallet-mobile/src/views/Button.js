import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function LoginButton({ text, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.button}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        paddingVertical: 8,
        paddingHorizontal: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: "#FFAE42",
    },
    buttonText: {
        color: "black",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "right",
    },
});
