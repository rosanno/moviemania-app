import { View, Text } from "react-native";
import { useGetPersonDetailsQuery } from "../services/tmdbApi";
import TopBar from "../components/TopBar";

export default function PersonDetailsScreen({ route }: any) {
  const { data: person } = useGetPersonDetailsQuery({ id: route.params.id });

  return (
    <View className="flex-1 bg-neutral-900">
      <TopBar label="Person Details" />
    </View>
  );
}
