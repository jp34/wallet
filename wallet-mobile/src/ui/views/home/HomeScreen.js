import React from "react";
import { View, Text } from "react-native";
import { ScreenStyles } from "../../Style";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={ScreenStyles.container}>
            <Text>Home</Text>
        </View>
    );
}

export default HomeScreen;
