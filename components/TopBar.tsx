import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon, UserIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";

import SearchIconButton from "./SearchIconButton";

export default function TopBar({ label }: { label?: string }) {
  const navigation = useNavigation<any>();
  const route = useRoute();

  return (
    <SafeAreaView className="mx-4 mt-2 mb-4">
      <View className="flex flex-row items-center">
        {route.name !== "Home" ? (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-black/40 rounded-full p-1.5"
          >
            <ChevronLeftIcon color="white" size={25} />
          </TouchableOpacity>
        ) : (
          <Text className="text-white text-2xl font-bold">
            Cinema
            <Text className="text-[#EAB308]">Swipe</Text>
          </Text>
        )}
        <Text className="text-lg text-white font-bold mx-auto">{label}</Text>
        {route.name !== "LoginScreen" && (
          <View className="flex-row space-x-1.5 items-center">
            <SearchIconButton />
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
              className="bg-black/40 rounded-full p-2"
            >
              <UserIcon color="white" size={25} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
