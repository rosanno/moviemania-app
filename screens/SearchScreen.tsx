import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

import { useSearchQuery } from "../services/tmdbApi";
import { image185 } from "../utils";
import { StackNavigationProp } from "@react-navigation/stack";

const { width, height } = Dimensions.get("window");

type MovieDetailsParamList = {
  MovieDetails?: { id: number };
};

export default function SearchScreen() {
  const navigation =
    useNavigation<StackNavigationProp<MovieDetailsParamList>>();
  const [query, setQuery] = useState<string>("");
  const { data: searchResults } = useSearchQuery({ query });

  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <View className="flex-row items-center space-x-3 mx-4 mt-4 mb-3">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon color="white" size={28} />
        </TouchableOpacity>
        <View className="flex-1 flex-row py-1 px-3 justify-between items-center bg-neutral-800 rounded-full">
          <TextInput
            onChangeText={(text) => setQuery(text)}
            placeholder="Search for movies"
            placeholderTextColor={"lightgray"}
            className="py-0.5 pl-1.5 flex-1 text-base font-semibold text-white tracking-wider"
          />
        </View>
      </View>
      <View>
        {searchResults && query !== "" && searchResults?.results?.length > 0 ? (
          <FlatList
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 90 }}
            className="mx-4"
            data={searchResults?.results}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="w-full flex-row space-x-2 my-2 bg-neutral-800 rounded-md pr-24"
                onPress={() => {
                  navigation.push("MovieDetails", {
                    id: item.id,
                  });
                }}
              >
                <View className="rounded-tl-md rounded-bl-md overflow-hidden">
                  <Image
                    source={{ uri: image185(item.poster_path) || undefined }}
                    style={{
                      width: width * 0.2,
                      height: height * 0.13,
                    }}
                  />
                </View>
                <View className="py-1.5 flex-col">
                  <Text className="text-neutral-300 text-sm">
                    {item.title.length < 20
                      ? item.title
                      : item.title.slice(0, 35) + "..."}
                  </Text>
                  <Text className="text-neutral-300 text-sm mt-auto">
                    {item.overview.length < 20
                      ? item.overview
                      : item.overview.slice(0, 80) + "..."}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <View
            className="flex-row justify-center items-center"
            style={{ height: height * 0.8 }}
          >
            <MagnifyingGlassIcon color="grey" size={120} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
