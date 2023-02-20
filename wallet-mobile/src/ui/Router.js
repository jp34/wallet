import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalletScreen from "./views/home/WalletScreen";
import HomeScreen from "./views/home/HomeScreen";
import ProfileScreen from "./views/home/ProfileScreen";
import StartScreen from "./views/StartScreen";
import LoginScreen from "./views/login/LoginScreen";
import SplashScreen from "./views/signup/SplashScreen";
import AgreementScreen from "./views/signup/AgreementScreen";
import CreateAccountScreen from "./views/signup/CreateAccountScreen";
import CreatePatientScreen from "./views/signup/CreatePatientScreen";

const Home = createBottomTabNavigator();

const HomeRouter = () => {
  return (
    <Home.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureResponseDistance: { horizontal: 20 },
        animation: false,
      }}
      initialRouteName={"Home"}
    >
      <Home.Screen name="Wallet" component={WalletScreen} />
      <Home.Screen name="Home" component={HomeScreen} />
      <Home.Screen name="Profile" component={ProfileScreen} />
    </Home.Navigator>
  );
};

const Root = createNativeStackNavigator();

const Router = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureResponseDistance: { horizontal: 20 },
        animation: false,
      }}
      initialRouteName={"Start"}
    >
      {/* Starting Screen */}
      <Root.Screen name="Start" component={StartScreen} />

      {/* Login Screens */}
      <Root.Screen name="Login" component={LoginScreen} />

      {/* Signup Screens */}
      <Root.Screen name="Splash" component={SplashScreen} />
      <Root.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Root.Screen name="CreatePatient" component={CreatePatientScreen} />
      <Root.Screen name="Agreement" component={AgreementScreen} />

      {/* Route to home router */}
      <Root.Screen name="HomeRouter" component={HomeRouter} />
    </Root.Navigator>
  );
};

export default Router;
