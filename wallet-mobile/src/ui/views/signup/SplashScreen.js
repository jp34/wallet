import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients, TextStyles } from "../../Styles";
import Header from "../../components/Header";

const SplashScreen = ({ navigation }) => {
  return (
    // Background Gradient
    <LinearGradient colors={Gradients.gradient1} style={{ flex: 1 }}>
      {/* Padding Based on Device */}
      <SafeAreaView style={{ flex: 1 }}>
        {/* Screen Container */}
        <View style={ScreenStyles.container}>
          {/* Header */}
          <Header navigation={navigation} />
          {/* Non-Header Container */}
          <View style={ScreenStyles.nonHeaderContainer}>
            {/* Text Group Container */}
            <View style={{ marginBottom: 20 }}>
              {/* Text Header */}
              <Text style={TextStyles.page.header}>What is JustBe?</Text>
              {/* Text Description */}
              <Text style={TextStyles.page.description}>
                Description of JustBe.
              </Text>
            </View>
            {/* Text Group Container */}
            <View style={{ marginBottom: 20 }}>
              {/* Text Header */}
              <Text style={TextStyles.page.header}>How Can I Use It?</Text>
              {/* Text Description */}
              <Text style={TextStyles.page.description}>
                Description of JustBe.
              </Text>
            </View>
          </View>
          {/* Continue Button */}
          <PrimaryButton
            text="Continue"
            options={{
              onPress: () => {
                return navigation.navigate("Agreement");
              },
            }}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SplashScreen;
