import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favorites() {
  return (
    <View className="flex-1 bg-neutral-900">
      <SafeAreaView>
        <Text>Favorites</Text>
      </SafeAreaView>
    </View>
  );
}
