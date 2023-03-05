import React from "react";
import { View, Text } from "react-native";
import { ScreenStyles } from "../../Style";
import { SecondaryButton } from "../../components/Buttons";
import { createWallet } from "../../../api/strapi-client";

const WalletScreen = ({ navigation }) => {

    const attemptCreateWallet = async () => {
        try {
            const result = await createWallet();
            if (result) return navigation.navigate('Wallet');
            // Page should reload without "Start Earning" button
            // Handle for incorrect logins
        } catch (err) {
            console.log("Create account failed with error");
            console.error(err);
            return false;
        }
    }

    return (
        <View style={ScreenStyles.container}>
            <Text>Wallet</Text>
            <SecondaryButton label="Start Earning" options={{
                onPress: () => attemptCreateWallet()
            }}/>
        </View>
    );
}

export default WalletScreen;
