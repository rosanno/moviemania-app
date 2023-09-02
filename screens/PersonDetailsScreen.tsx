import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import {
  useGetCreditMoviesQuery,
  useGetPersonDetailsQuery,
} from "../services/tmdbApi";
import TopBar from "../components/TopBar";
import { image185, image342 } from "../utils";
import PersonDataItem from "../components/PersonDataItem";

const { width, height } = Dimensions.get("window");

type MovieDetailsParamList = {
  MovieDetails: { id: number };
};

export default function PersonDetailsScreen({ route }: any) {
  const { data: person } = useGetPersonDetailsQuery({ id: route.params.id });
  const { data: creditMovies } = useGetCreditMoviesQuery({
    id: route.params.id,
  });
  const navigation =
    useNavigation<StackNavigationProp<MovieDetailsParamList>>();

  return (
    <View className="flex-1 bg-neutral-900">
      <TopBar label="Person Details" />
      <ScrollView>
        <View
          className="flex-row justify-center"
          style={{
            shadowColor: "gray",
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
          }}
        >
          <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
            <Image
              source={{
                uri: image342(person?.profile_path || "") || undefined,
              }}
              style={{ height: height * 0.43, width: width * 0.74 }}
            />
          </View>
        </View>
        <View className="mt-2">
          <Text className="text-white text-xl text-center">{person?.name}</Text>
          <Text className="text-base text-neutral-500 text-center">
            {person?.place_of_birth}
          </Text>
        </View>
        <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700/50 rounded-full">
          <PersonDataItem
            label="Gender"
            item={person?.gender === 1 ? "Female" : "Male"}
            border
          />
          <PersonDataItem label="Birthday" item={person?.birthday} border />
          <PersonDataItem
            label="Known for"
            item={person?.known_for_department}
            border
          />
          <PersonDataItem
            label="Popularity"
            item={person?.popularity?.toFixed(2) + "%"}
          />
        </View>

        <View className="my-6 mx-4 space-y-2">
          <Text className="text-white text-lg">Biography</Text>
          <Text className="text-neutral-400 tracking-wide">
            {person?.biography && person?.biography?.length < 200
              ? person?.biography
              : person?.biography?.slice(0, 150) + "..." || "N/A"}
          </Text>
        </View>

        <View className="mx-4 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-white text-lg font-bold">Known for</Text>
          </View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={creditMovies?.cast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.push("MovieDetails", {
                    id: item.id,
                  })
                }
              >
                <View className="px-2">
                  <Image
                    source={{ uri: image185(item.poster_path) || undefined }}
                    style={{
                      width: width * 0.34,
                      height: height * 0.24,
                    }}
                    className="object-contain rounded-xl"
                  />
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
