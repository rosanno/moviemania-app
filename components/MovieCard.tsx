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
      <View>
        <Image
          source={{ uri: image500(item.poster_path || "") || undefined }}
          style={{
            width: width * 0.64,
            height: height * 0.45,
          }}
          className="rounded-3xl"
        />
        <View className="flex-row justify-center text-center mt-2.5">
          <Text className="text-white text-lg font-semibold">{item.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
