import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./src/views/Homescreen";
import Login from "./src/views/Login";
import Signup from "./src/views/SignUp";
import Dashboard from "./src/views/Dashboard";
import Profile from "./src/views/Profile";
import MyHealth from "./src/views/MyHealth";
import Research from "./src/views/Research";
import CreatePatient from "./src/views/CreatePatient";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                    animation: "fade"
                }}
                initialRouteName={"Login"}
            >
                {/* <Stack.Screen name="Homescreen" component={Homescreen} /> */}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="MyHealth" component={MyHealth} />
                <Stack.Screen name="Research" component={Research} />
                <Stack.Screen name="CreatePatient" component={CreatePatient} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
