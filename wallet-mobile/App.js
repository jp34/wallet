import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/views/Login";
import Signup from "./src/views/Signup";
import Dashboard from "./src/views/Dashboard";
import Profile from "./src/views/Profile";
import MyHealth from "./src/views/MyHealth";
import Research from "./src/views/Research";
import CreatePatient from "./src/views/CreatePatient";
import TermsConditions from "./src/views/TermsConditions";
import IntakeMedProvider from "./src/views/IntakeMedProvider";
import IntakePatientAllergies from "./src/views/IntakePatientAllergies";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureResponseDistance: { horizontal: 20 },
                }}
                initialRouteName={"Login"}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="MyHealth" component={MyHealth} />
                <Stack.Screen name="Research" component={Research} />
                <Stack.Screen name="CreatePatient" component={CreatePatient} />
                <Stack.Screen name="TermsConditions" component={TermsConditions} />
                <Stack.Screen name="IntakeMedProvider" component={IntakeMedProvider} />
                <Stack.Screen name="IntakePatientAllergies" component={IntakePatientAllergies} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
