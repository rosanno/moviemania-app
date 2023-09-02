import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { image185 } from "../utils";

interface CastProps {
  credits: Credits;
}

type PersonDetailsParamList = {
  PersonDetails: { id: number };
};

export default function Cast({ credits }: CastProps) {
  const navigation =
    useNavigation<StackNavigationProp<PersonDetailsParamList>>();

  return (
    <View className="mx-4 mt-5 mb-8">
      <Text className="text-[#EAB308] text-lg mb-1.5">Cast</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={credits?.cast}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="mr-4 items-center"
            onPress={() =>
              navigation.navigate("PersonDetails", {
                id: item.id,
              })
            }
          >
            <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
              <Image
                source={{ uri: image185(item.profile_path) || undefined }}
                className="rounded-2xl h-24 w-20"
              />
            </View>
            <View className="w-20 items-center justify-center mt-1">
              <Text className="text-neutral-400 text-center">{item?.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
