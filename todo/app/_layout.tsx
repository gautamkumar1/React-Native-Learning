import { Stack } from "expo-router";
import "./global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "@/components/SafeScreen";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
export default function RootLayout() {
  return <SafeAreaProvider>
    <SafeScreen>
    <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="index" />
    <Stack.Screen name="(auth)" />
  </Stack>
  <StatusBar style="dark" />
  <Toast />
    </SafeScreen>
  </SafeAreaProvider>
}
