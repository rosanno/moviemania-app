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
      <SafeAreaView className="mx-4 mt-2 mb-4">
        <StatusBar style="light" />
        <View className="flex flex-row items-center justify-between">
          <Text className="text-white text-xl font-extrabold">
            Mo
            <Image
              source={require("../assets/images/cinema.png")}
              className="w-7 h-7 object-contain"
            />
            <Text>ie</Text>
            <Text className="text-[#EAB308]">Mania</Text>
          </Text>
          <SearchIconButton />
        </View>
      </SafeAreaView>
      <ScrollView
        ref={ref}
        contentContainerStyle={{ paddingBottom: 10 }}
        bounces={false}
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
