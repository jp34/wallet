import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerBackVisible: true,
        headerTransparent: true,
        headerTitle: "",
        headerTintColor: "#EEE",
      }}
    />
  );
}
