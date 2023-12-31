import { View, Dimensions, Text } from "react-native";
import Carousel from "react-native-snap-carousel";

import { useGetDiscoverMoviesQuery } from "../services/tmdbApi";
import MovieCard from "./MovieCard";

const { width, height } = Dimensions.get("window");

export default function Discover() {
  const { data } = useGetDiscoverMoviesQuery({ type: "movie" });

  return (
    <View className="mb-8">
      <View className="mx-4 mt-4 mb-6">
        <Text className="text-white text-2xl font-bold text-center">
          Discover
        </Text>
      </View>
      <Carousel
        data={data?.results || []}
        renderItem={({ item }) => <MovieCard item={item} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        sliderHeight={height}
        itemWidth={width * 0.66}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}
