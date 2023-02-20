import React from "react";
import { View, Text } from "react-native";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles } from "../../Styless";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={ScreenStyles.container}>
      <Text>Profile</Text>
      <PrimaryButton
        label="Log Out"
        options={{
          onPress: () => {
            return navigation.navigate("Start");
          },
        }}
      />
    </View>
  );
};

export default ProfileScreen;
