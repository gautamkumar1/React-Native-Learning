import { Link } from "expo-router";
import {SafeAreaView, Text, View } from "react-native";
export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
    <Text className="text-red-500 text-8xl font-bold">Hello Ji</Text>
    <Link href="/(auth)/signup">Signup</Link>
    <Link href="/(auth)">Signin</Link>
  </View>
  );
}
