import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PrimaryButton } from "../../components/Buttons";
import { ScreenStyles, Gradients, TextStyles } from "../../Styless";
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
          <View
            style={ScreenStyles.nonHeaderContainer}
          >
            {/* Text Group Container */}
            <View style={{ marginBottom: 30 }}>
              {/* Text Header */}
              <Text style={TextStyles.splash.header}>What is JustBe?</Text>
              {/* Text Description */}
              <Text style={TextStyles.splash.description}>
                Description of what JustBe is all about.
              </Text>
            </View>
            {/* Text Group Container */}
            <View style={{ marginBottom: 30 }}>
              {/* Text Header */}
              <Text style={TextStyles.splash.header}>How Can I Use It?</Text>
              {/* Text Description */}
              <Text style={TextStyles.splash.description}>
                Description of what JustBe is all about.
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
