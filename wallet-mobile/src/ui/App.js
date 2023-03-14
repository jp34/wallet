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
      base: "#6030D9",
      secondary: "#46239f",
      shades: {
        1: "#8751FE",
        2: "#AE72FF",
        3: "#D494FF",
        4: "#FAB6FF",
      },
      friends: {
        1: "#C586FF",
        2: "#65BAA9",
        3: "#005245",
      },
      grayComplement: {
        100: "#eeedf1",
        200: "#e2e0e7",
        300: "#d4d1dc",
        400: "#c6c2d0",
        500: "#b6b0c2",
        600: "#a39db3",
        700: "#8d85a0",
        800: "#706884",
        900: "#423d4d",
      },
      secondaryPurple: {
        100: "#f0ebfb",
        200: "#e5ddf9",
        300: "#d9cdf6",
        400: "#cbbcf3",
        500: "#bca8ef",
        600: "#ab91eb",
        700: "#9576e6",
        800: "#7850df",
      },
      secondaryViolet: {
        100: "#f7e9fb",
        200: "#f1d9f8",
        300: "#ebc7f5",
        400: "#e3b3f1",
        500: "#db9ced",
        600: "#d181e8",
        700: "#c45de1",
        800: "#ab2ece",
      },
      secondaryPink: {
        200: "#fbe8f6",
        300: "#f8d8ef",
        400: "#f4c5e7",
        500: "#f1b0de",
        600: "#ec98d4",
        700: "#e77ac8",
        800: "#df51b7",
      },
      secondaryBlue: {
        100: "#ddf1f9",
        200: "#c4e6f4",
        300: "#a8dbef",
        400: "#88cde9",
        500: "#63bee2",
        600: "#35abda",
        700: "#2a93bd",
        800: "#217495",
      },
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
