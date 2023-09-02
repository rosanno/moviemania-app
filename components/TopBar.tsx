import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import SearchIconButton from "./SearchIconButton";
import { useNavigation } from "@react-navigation/native";

export default function TopBar({ label }: { label: string }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="mx-4 mt-2 mb-4">
      <View className="flex flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-black/40 rounded-full p-1.5"
        >
          <ChevronLeftIcon color="white" size={25} />
        </TouchableOpacity>
        <Text className="text-xl text-white font-bold">{label}</Text>
        <SearchIconButton />
      </View>
    </SafeAreaView>
  );
}
