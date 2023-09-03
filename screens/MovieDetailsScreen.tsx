import { ScrollView, View } from "react-native";

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
import TopBar from "../components/TopBar";

type Props = {
  route: any;
};

export default function MovieDetailsScreen({ route }: Props) {
  const { data, isLoading } = useGetMovieDetailsQuery({ id: route.params.id });
  const { data: credits, isLoading: isCreditLoading } = useGetMovieCreditsQuery(
    { id: route.params.id }
  );
  const { data: similar, isLoading: isSimilarLoading } =
    useGetSimilarMoviesQuery({ id: route.params.id });
  const { data: recommend, isLoading: isRecommendLoading } =
    useGetRecommendMoviesQuery({
      id: route.params.id,
    });

  return (
    <View className="flex-1 bg-neutral-900">
      <TopBar label="Movie Details" />
      <ScrollView overScrollMode="never">
        <Billboard data={data as Results} isLoading={isLoading} />

        <Cast credits={credits as Credits} isLoading={isCreditLoading} />

        <Media
          label="Similar Movies"
          data={similar as Data}
          isLoading={isSimilarLoading}
        />

        <Media
          label="Recommend Movies"
          data={recommend as Data}
          isLoading={isRecommendLoading}
        />
      </ScrollView>
    </View>
  );
}
