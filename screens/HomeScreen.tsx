import { useRef } from "react";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

import Discover from "../components/Discover";
import {
  useGetTrendingMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../services/tmdbApi";
import Media from "../components/Media";
import { useScrollToTop } from "@react-navigation/native";
import TopBar from "../components/TopBar";

export default function HomeScreen() {
  const { data: trending, isLoading: isTrendingLoading } =
    useGetTrendingMoviesQuery();
  const { data: upcoming, isLoading: isUpcomingLoading } =
    useGetUpcomingMoviesQuery();
  const ref = useRef(null);

  useScrollToTop(ref);

  return (
    <View className="flex-1 bg-neutral-900">
      <StatusBar style="light" />
      <TopBar />
      <ScrollView
        ref={ref}
        contentContainerStyle={{ paddingBottom: 10 }}
        bounces={false}
        overScrollMode="never"
      >
        {/* Discover movies */}
        <Discover />

        {/* Trending Movies */}
        <Media
          label="Trending"
          data={trending as Data}
          isLoading={isTrendingLoading}
        />

        {/* Trending Movies */}
        <Media
          label="Upcoming"
          data={upcoming as Data}
          isLoading={isUpcomingLoading}
        />
      </ScrollView>
    </View>
  );
}
