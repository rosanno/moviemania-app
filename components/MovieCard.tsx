import {
  View,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BookmarkIcon } from "react-native-heroicons/outline";

import { image500 } from "../utils";

type MovieDetailsParamList = {
  MovieDetails: { id: number };
};

const { width, height } = Dimensions.get("window");

export default function MovieCard({ item }: { item: Results }) {
  const navigation =
    useNavigation<StackNavigationProp<MovieDetailsParamList>>();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.push("MovieDetails", {
          id: item.id,
        });
      }}
    >
      <View>
        <Image
          source={{ uri: image500(item.poster_path || "") || undefined }}
          style={{
            width: width * 0.64,
            height: height * 0.45,
          }}
          className="rounded-3xl"
        />
        <TouchableOpacity className="absolute right-3 top-4 bg-black/50 rounded-full p-1.5">
          <BookmarkIcon color="white" strokeWidth={2} size={20} />
        </TouchableOpacity>
        <View className="flex-row justify-center text-center mt-2.5 w-52">
          <Text className="text-white text-lg font-semibold">{item.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
