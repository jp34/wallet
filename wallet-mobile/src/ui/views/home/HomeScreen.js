import React from "react";
import { View, Text } from "react-native";
import { ScreenStyles } from "../../Styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={ScreenStyles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
