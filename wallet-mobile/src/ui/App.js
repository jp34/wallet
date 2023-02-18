import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import MyHealth from "./views/MyHealth";
import Research from "./views/Research";
import IntakeMedProvider from "./views/IntakeMedProvider";
import IntakePatientAllergies from "./views/IntakePatientAllergies";
import StartScreen from "./views/StartScreen";
import LoginScreen from "./views/login/LoginScreen";
import SplashScreen from "./views/intake/SplashScreen";
import AgreementScreen from "./views/intake/AgreementScreen";
import CreateAccountScreen from "./views/intake/CreateAccountScreen";
import CreatePatientScreen from "./views/intake/CreatePatientScreen";

const Stack = createNativeStackNavigator();

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
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureResponseDistance: { horizontal: 20 },
                    animation: false,
                }}
                initialRouteName={"Start"}
            >
                <Stack.Screen name="Start" component={StartScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Agreement" component={AgreementScreen} />
                <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
                <Stack.Screen name="CreatePatient" component={CreatePatientScreen} />

                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="MyHealth" component={MyHealth} />
                <Stack.Screen name="Research" component={Research} />
                <Stack.Screen name="IntakeMedProvider" component={IntakeMedProvider} />
                <Stack.Screen name="IntakePatientAllergies" component={IntakePatientAllergies} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
