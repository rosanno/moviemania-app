import { TouchableOpacity } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function SearchIconButton() {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SearchScreen")}
      className="bg-black/40 rounded-full p-2"
    >
      <MagnifyingGlassIcon color="white" size={25} />
    </TouchableOpacity>
  );
}
