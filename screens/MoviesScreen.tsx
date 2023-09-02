import {
  View,
  Text,
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
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className="mx-4"
        data={movies?.results}
        numColumns={2}
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
    </View>
  );
}
