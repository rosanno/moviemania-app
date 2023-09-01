import { TouchableOpacity } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

export default function SearchIconButton() {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
      <MagnifyingGlassIcon color="white" size={30} />
    </TouchableOpacity>
  );
}
