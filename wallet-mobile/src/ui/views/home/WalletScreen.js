import React from "react";
import { View, Text } from "react-native";
import { ScreenStyles } from "../../Style";
import { SecondaryButton } from "../../components/Buttons";

const WalletScreen = ({ navigation }) => {
    return (
        <View style={ScreenStyles.container}>
            <Text>Wallet</Text>
            <SecondaryButton label="Start Earning" options={{
                onPress: () => {
                    return navigation.navigate('Start');
                }
            }}/>
        </View>
    );
}

export default WalletScreen;
