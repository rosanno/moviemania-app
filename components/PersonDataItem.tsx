import { View, Text } from "react-native";
import React from "react";

export default function PersonDataItem({
  label,
  item,
  border = false,
}: {
  label: string;
  item: any;
  border?: boolean;
}) {
  return (
    <View
      className={`${
        border && "border-r-2 border-r-neutral-400"
      } px-2 items-center`}
    >
      <Text className="text-white font-semibold">{label}</Text>
      <Text className="text-neutral-300 text-sm">{item}</Text>
    </View>
  );
}
