import { useRef } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import Discover from "../components/Discover";
import {
  useGetTrendingMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "../services/tmdbApi";
import Media from "../components/Media";
import SearchIconButton from "../components/SearchIconButton";
import { useScrollToTop } from "@react-navigation/native";

export default function HomeScreen() {
  const { data: trending } = useGetTrendingMoviesQuery();
  const { data: upcoming } = useGetUpcomingMoviesQuery();
  const ref = useRef(null);

  useScrollToTop(ref);

  return (
    <View className="flex-1 bg-neutral-900">
      <StatusBar style="light" />
      <SafeAreaView className="mt-2 pb-2 border-b border-b-neutral-600/20">
        <View className="mx-4 flex flex-row items-center justify-between">
          <Text className="text-3xl text-white font-bold">
            Movie-<Text className="text-[#EAB308]">E</Text>
          </Text>
          <SearchIconButton />
        </View>
      </SafeAreaView>
      <ScrollView
        ref={ref}
        contentContainerStyle={{ paddingBottom: 10, paddingTop: 20 }}
        bounces={false}
        overScrollMode="never"
      >
        {/* Discover movies */}
        <Discover />

        {/* Trending Movies */}
        <Media label="Trending" data={trending as Data} />

        {/* Trending Movies */}
        <Media label="Upcoming" data={upcoming as Data} />
      </ScrollView>
    </View>
  );
}
