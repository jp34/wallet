import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/views/Login";
import Dashboard from "./src/views/Dashboard";
import Profile from "./src/views/Profile";
import MyHealth from "./src/views/MyHealth";
import Research from "./src/views/Research"

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
			screenOptions={{ headerShown: false, gestureEnabled: true, gestureResponseDistance: {horizontal: 20} }}
			initialRouteName={Login}
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Dashboard" component={Dashboard} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="MyHealth" component={MyHealth} />
				<Stack.Screen name="Research" component={Research} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
