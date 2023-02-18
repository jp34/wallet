import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";

const App = () => {

    const [fonts] = useFonts({
        'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),
        'Quicksand-Medium': require('../../assets/fonts/Quicksand-Medium.ttf'),
        'Quicksand-SemiBold': require('../../assets/fonts/Quicksand-SemiBold.ttf'),
        'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
    });
    if (!fonts) return null;

    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
};

export default App;
