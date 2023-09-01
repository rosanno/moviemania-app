import {
  View,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { image500 } from "../utils";
import { useGetGenresQuery } from "../services/tmdbApi";

type MovieDetailsParamList = {
  MovieDetails: { id: number };
};

const { width, height } = Dimensions.get("window");

export default function MovieCard({ item }: { item: Results }) {
  const navigation =
    useNavigation<StackNavigationProp<MovieDetailsParamList>>();
  const { data: genres } = useGetGenresQuery();

  const movieGenres = genres?.genres?.filter((genre) =>
    item.genre_ids.includes(genre.id)
  );

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.push("MovieDetails", {
          id: item.id,
        });
      }}
    >
      <View
        style={{
          width: width - 40,
          height: height * 0.28,
        }}
        className="relative rounded-2xl overflow-hidden"
      >
        <Image
          source={{ uri: image500(item.backdrop_path) || undefined }}
          className="absolute w-full h-full object-contain"
        />
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
          className="absolute top-0 left-0 w-full h-full"
        />
        <View className="absolute bottom-3 left-2 right-0 px-3">
          <Text className="text-white text-xl font-bold">{item?.title}</Text>
          <View className="flex-row items-center">
            {movieGenres?.map((genre, index) => (
              <Text key={genre.id} className="text-neutral-300 text-sm">
                {index > 0 && ", "}
                {genre.name}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
