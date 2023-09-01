import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";

import { image500 } from "../utils";

const { width, height } = Dimensions.get("window");

export default function Billboard({ data }: { data: Results }) {
  return (
    <View className="flex-1">
      <View>
        <Image
          source={{
            uri: image500(data?.poster_path) || undefined,
          }}
          style={{ width, height: height * 0.5 }}
        />
        <LinearGradient
          colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
          style={{ width, height: height * 0.4 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0
            "
        />
        <View className="absolute bottom-4 left-0 right-0 mx-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text
              className="text-white text-xl font-bold"
              style={{
                width: width * 0.7,
              }}
            >
              {data?.title || data?.name}
            </Text>
            <TouchableOpacity className="bg-neutral-800 w-10 h-10 rounded-full flex-row items-center justify-center">
              <HeartIcon color="white" />
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap items-center gap-3">
            {data?.genres?.map((genre) => (
              <Text
                key={genre.id}
                className="text-white bg-neutral-700 py-1 px-2 rounded-md"
              >
                {genre.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
      <View className="mx-4">
        <Text className="text-[#EAB308] text-lg">About</Text>
        <Text className="text-neutral-400 leading-6">{data?.overview}</Text>
      </View>
    </View>
  );
}
