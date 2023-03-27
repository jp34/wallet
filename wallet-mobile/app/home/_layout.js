import { Tabs } from "expo-router";
import { View, Icon, Text, Center } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        gestureEnabled: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          right: 20,
          left: 20,
          elevation: 0,
          borderRadius: 15,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ focused }) => (
            <Center top="4">
              <Icon
                name="home"
                as={FontAwesome5}
                size="8"
                color={focused ? "secondaryPurple.800" : "purple.300"}
              />
              <Text
                fontSize="xs"
                color={focused ? "secondaryPurple.800" : "purple.300"}
              >
                Home
              </Text>
            </Center>
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({ focused }) => (
            <Center top="4">
              <Icon
                name="wallet"
                as={FontAwesome5}
                size="8"
                color={focused ? "secondaryPurple.800" : "purple.300"}
              />
              <Text
                fontSize="xs"
                color={focused ? "secondaryPurple.800" : "purple.300"}
              >
                Wallet
              </Text>
            </Center>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Center top="4">
              <Icon
                name="user-alt"
                as={FontAwesome5}
                size="8"
                color={focused ? "secondaryPurple.800" : "purple.300"}
              />
              <Text
                fontSize="xs"
                color={focused ? "secondaryPurple.800" : "purple.300"}
              >
                Profile
              </Text>
            </Center>
          ),
        }}
      />
    </Tabs>
  );
}
