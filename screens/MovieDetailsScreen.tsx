import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

import {
  useGetMovieCreditsQuery,
  useGetMovieDetailsQuery,
  useGetRecommendMoviesQuery,
  useGetSimilarMoviesQuery,
} from "../services/tmdbApi";
import Billboard from "../components/Billboard";
import Cast from "../components/Cast";
import Media from "../components/Media";
import { useNavigation } from "@react-navigation/native";

type Props = {
  route: any;
};

export default function MovieDetailsScreen({ route }: Props) {
  const { data } = useGetMovieDetailsQuery({ id: route.params.id });
  const { data: credits } = useGetMovieCreditsQuery({ id: route.params.id });
  const { data: similar } = useGetSimilarMoviesQuery({ id: route.params.id });
  const { data: recommend } = useGetRecommendMoviesQuery({
    id: route.params.id,
  });
  const navigation = useNavigation<any>();

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      <SafeAreaView className="absolute z-20 mx-4 mt-2">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-black/80 p-1.5 rounded-md"
        >
          <ChevronLeftIcon color="white" size={28} />
        </TouchableOpacity>
      </SafeAreaView>
      <Billboard data={data as Results} />

      <Cast credits={credits as Credits} />

      <Media label="Similar Movies" data={similar as Data} />

      <Media label="Recommend Movies" data={recommend as Data} />
    </ScrollView>
  );
}
