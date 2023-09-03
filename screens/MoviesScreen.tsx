import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  useGetDiscoverMoviesQuery,
  useGetGenresQuery,
} from "../services/tmdbApi";
import { image185 } from "../utils";
import TopBar from "../components/TopBar";
import Loader from "../components/Loader";

type MovieDetailsParamList = {
  MovieDetails: { id: number };
};

const { width, height } = Dimensions.get("window");

export default function MoviesScreen() {
  const [seletedGenres, setSeletedGenres] = useState<
    number | undefined | null
  >();
  const { data: movies, isFetching } = useGetDiscoverMoviesQuery({
    type: "movie",
    with_genres: seletedGenres,
  });
  const { data: genres } = useGetGenresQuery();
  const navigation =
    useNavigation<StackNavigationProp<MovieDetailsParamList>>();

  return (
    <View className="flex-1 bg-neutral-900">
      <TopBar label="Movies" />
      <View className="mb-6 ml-4">
        <Text className="text-white text-2xl mx-3">Category</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={genres?.genres}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                setSeletedGenres(
                  (prev) => (prev === item.id ? null : item.id) as number | null
                )
              }
              className={`ml-2.5 mt-4 px-2 py-3 rounded-2xl w-28 ${
                seletedGenres === item.id
                  ? "bg-yellow-500"
                  : "bg-neutral-500/20"
              }`}
            >
              <Text className="text-white text-center">{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {isFetching ? (
        <View
          className="flex-row items-center justify-center text-center"
          style={{ height: height * 0.7 }}
        >
          <Loader />
        </View>
      ) : (
        <FlatList
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          data={movies?.results}
          numColumns={2}
          className="mx-4"
          renderItem={({ item }) => (
            <View className="my-2 px-0.5">
              <TouchableWithoutFeedback
                onPress={() => navigation.push("MovieDetails", { id: item.id })}
              >
                <View className="px-1.5">
                  <Image
                    source={{ uri: image185(item.poster_path) || undefined }}
                    style={{
                      width: width * 0.42,
                      height: height * 0.28,
                    }}
                    className="object-contain rounded-2xl"
                  />
                </View>
              </TouchableWithoutFeedback>
              <View className="w-36 mx-2 pt-2">
                <Text className="text-neutral-300">
                  {item.title.length < 20
                    ? item.title
                    : item.title.slice(0, 25) + "..."}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}
