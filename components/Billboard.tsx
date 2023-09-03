import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BookmarkIcon, HeartIcon } from "react-native-heroicons/outline";

import { image500 } from "../utils";

const { width, height } = Dimensions.get("window");

export default function Billboard({
  data,
  isLoading,
}: {
  data: Results;
  isLoading: boolean;
}) {
  return (
    <View className="flex-1">
      {isLoading ? (
        <View
          className="flex-row items-center justify-center text-center"
          style={{ height: height * 0.5 }}
        >
          <ActivityIndicator size="large" color="#EAB308" />
        </View>
      ) : (
        <View>
          <View className="flex-row justify-center mx-4">
            <Image
              source={{
                uri: image500(data?.poster_path) || undefined,
              }}
              className="rounded-3xl"
              style={{ width: width * 0.9, height: height * 0.5 }}
            />
            <LinearGradient
              colors={["transparent", "rgba(23,23,23,0.9)", "rgba(23,23,23,1)"]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0
            "
            />
            <TouchableOpacity className="absolute right-3 top-4 bg-black/50 rounded-full p-1.5">
              <BookmarkIcon color="white" strokeWidth={2} size={20} />
            </TouchableOpacity>
          </View>
          <View className="mx-4 mt-4">
            <View className="flex-row items-center justify-between mb-3">
              <Text
                className="text-white text-3xl font-bold"
                style={{
                  width: width * 0.7,
                }}
              >
                {data?.title || data?.name}
              </Text>
              <TouchableOpacity className="absolute right-3 top-4 bg-black/50 rounded-full p-1.5">
                <HeartIcon color="white" strokeWidth={2.5} size={25} />
              </TouchableOpacity>
            </View>
            <View className="flex-row flex-wrap items-center gap-3 mt-0.5">
              {data?.genres?.map((genre) => (
                <Text
                  key={genre.id}
                  className="text-neutral-300 text-base bg-neutral-700 py-1 px-2 rounded-md"
                >
                  {genre.name}
                </Text>
              ))}
            </View>
          </View>
          <View className="mx-4 mt-2.5">
            <Text className="text-neutral-400 leading-6">{data?.overview}</Text>
          </View>
        </View>
      )}
    </View>
  );
}
