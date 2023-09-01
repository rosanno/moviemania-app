import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useGetDiscoverMoviesQuery } from "../services/tmdbApi";
import { image185 } from "../utils";
import TopBar from "../components/TopBar";

type MovieDetailsParamList = {
  MovieDetails: { id: number };
};

const { width, height } = Dimensions.get("window");

export default function MoviesScreen() {
  const { data: movies } = useGetDiscoverMoviesQuery({ type: "movie" });
  const navigation =
    useNavigation<StackNavigationProp<MovieDetailsParamList>>();

  return (
    <View className="flex-1 bg-neutral-900">
      <TopBar label="Movies" />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className="mx-4"
        data={movies?.results}
        numColumns={3}
        renderItem={({ item }) => (
          <View className="my-2">
            <TouchableWithoutFeedback
              onPress={() => navigation.push("MovieDetails", { id: item.id })}
            >
              <View className="px-1.5">
                <Image
                  source={{ uri: image185(item.poster_path) || undefined }}
                  style={{
                    width: width * 0.27,
                    height: height * 0.2,
                  }}
                  className="object-contain rounded-md"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
