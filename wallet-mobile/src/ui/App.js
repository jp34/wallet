// import { useFonts } from "expo-font";
// import Router from "./Router";

// const App = () => {
//   const [fonts] = useFonts({
//     "Quicksand-Regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
//     "Quicksand-Medium": require("../../assets/fonts/Quicksand-Medium.ttf"),
//     "Quicksand-SemiBold": require("../../assets/fonts/Quicksand-SemiBold.ttf"),
//     "Quicksand-Bold": require("../../assets/fonts/Quicksand-Bold.ttf"),
//   });
//   if (!fonts) return null;

//   return (
//     <NavigationContainer>
//       <Router />
//     </NavigationContainer>
//   );
// };

// export default App;

import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={StartScreen} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;