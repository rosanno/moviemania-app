import { memo } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { image185 } from "../utils";

const { width, height } = Dimensions.get("window");

type MovieDetailsParamList = {
  MovieDetails: { id: number };
};

function Media({
  label,
  data,
  isLoading,
}: {
  label: string;
  data: Data;
  isLoading: boolean;
}) {
  const navigation =
    useNavigation<StackNavigationProp<MovieDetailsParamList>>();

  return (
    <View className="ml-4 mb-6">
      <View className="ml-3 mr-5 flex-row items-center justify-between mb-4">
        <Text className="text-white text-base font-bold">{label}</Text>
        <TouchableWithoutFeedback>
          <Text className="text-sm text-[#EAB308]">See all</Text>
        </TouchableWithoutFeedback>
      </View>

      {data?.results?.length === 0 && (
        <View className="flex-row justify-center text-center">
          <Text className="text-base text-neutral-400">No {label}</Text>
        </View>
      )}

      {isLoading && (
        <View className="flex-row justify-center text-center">
          <ActivityIndicator size="large" color="#EAB308" />
        </View>
      )}

      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data?.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.push("MovieDetails", {
                id: item.id,
              })
            }
          >
            <View className="px-2">
              <Image
                source={{ uri: image185(item.poster_path) || undefined }}
                style={{
                  width: width * 0.3,
                  height: height * 0.2,
                }}
                className="object-contain rounded-xl"
              />
              <View className="w-28 mt-2">
                <Text className="text-white font-semibold leading-5">
                  {item.title.length < 20
                    ? item.title
                    : item.title.slice(0, 20) + "..."}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}

export default memo(Media);
