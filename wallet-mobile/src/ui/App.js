import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";
import { NativeBaseProvider } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  const [fonts] = useFonts({
    "Quicksand-Regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-Medium": require("../../assets/fonts/Quicksand-Medium.ttf"),
    "Quicksand-SemiBold": require("../../assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Bold": require("../../assets/fonts/Quicksand-Bold.ttf"),
  });
  if (!fonts) return null;

  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };

  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
