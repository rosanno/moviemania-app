import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { useGetPopularPeopleQuery } from "../services/tmdbApi";
import { image185 } from "../utils";
import TopBar from "../components/TopBar";

type PersonDetailsParamList = {
  PersonDetails: { id: number };
};

export default function PeopleScreen() {
  const { data: people } = useGetPopularPeopleQuery();
  const navigation =
    useNavigation<StackNavigationProp<PersonDetailsParamList>>();

  return (
    <View className="flex-1 bg-neutral-900">
      <TopBar label="Popular People" />
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        className="mx-4"
        data={people?.results}
        numColumns={4}
        renderItem={({ item }) => (
          <View className="my-1.5 px-2">
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("PersonDetails", {
                  id: item.id,
                })
              }
            >
              <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                <Image
                  source={{ uri: image185(item.profile_path) || undefined }}
                  className="rounded-2xl h-20 w-20"
                />
              </View>
            </TouchableWithoutFeedback>
            <View className="w-16 items-center justify-center pt-1.5">
              <Text className="text-neutral-400 text-center">{item?.name}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
