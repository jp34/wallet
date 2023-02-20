import React from "react";
import { View, Text } from "react-native";
import { ScreenStyles } from "../../Style";
import { SecondaryButton } from "../../components/Buttons";

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={ScreenStyles.container}>
            <Text>Profile</Text>
            <SecondaryButton label="Log Out" options={{
                onPress: () => {
                    return navigation.navigate('Start');
                }
            }}/>
        </View>
    );
}

export default ProfileScreen;
