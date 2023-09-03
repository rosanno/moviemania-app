import { View, Text, ActivityIndicator } from "react-native";

export default function Loader() {
  return (
    <View className="flex-row justify-center text-center">
      <ActivityIndicator size="large" color="#EAB308" />
    </View>
  );
}
