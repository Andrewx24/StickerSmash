import { Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import "../global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffc0cb", // using hex for pink
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontWeight: "bold",
        },
        contentStyle: {
          backgroundColor: "#808080", // using hex for gray
        },
        headerTintColor: "#000000", // black text for better contrast on pink
        statusBarStyle: colorScheme === "dark" ? "light" : "dark",
        statusBarColor: "#ffc0cb", // matching header background
      }}
    />
  );
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};