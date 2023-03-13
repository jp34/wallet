import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";
import { NativeBaseProvider, extendTheme } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

const App = () => {
  // const [fonts] = useFonts({
  //   "Quicksand-Regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
  //   "Quicksand-Medium": require("../../assets/fonts/Quicksand-Medium.ttf"),
  //   "Quicksand-SemiBold": require("../../assets/fonts/Quicksand-SemiBold.ttf"),
  //   "Quicksand-Bold": require("../../assets/fonts/Quicksand-Bold.ttf"),
  // });
  // if (!fonts) return null;

  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };

  const theme = extendTheme({
    colors: {
      vibrantAccent: "#6924F5",
      lightAccent: "#F3E5FF",
      maybeAccent: "#E324F5"
    },
  });

  return (
    <NativeBaseProvider config={config} theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
