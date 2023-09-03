import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../components/TopBar";

export default function LoginScreen() {
  return (
    <View className="flex-1 bg-neutral-900">
      <TopBar label="Login" />
    </View>
  );
}
