import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import {
  useGetCreditMoviesQuery,
  useGetPersonDetailsQuery,
} from "../services/tmdbApi";
import TopBar from "../components/TopBar";
import { image342 } from "../utils";

const { width, height } = Dimensions.get("window");

const PersonData = ({
  label,
  item,
  border = false,
}: {
  label: string;
  item: any;
  border?: boolean;
}) => {
  return (
    <View
      className={`${
        border && "border-r-2 border-r-neutral-400"
      } px-2 items-center`}
    >
      <Text className="text-white font-semibold">{label}</Text>
      <Text className="text-neutral-300 text-sm">{item}</Text>
    </View>
  );
};

export default function PersonDetailsScreen({ route }: any) {
  const { data: person } = useGetPersonDetailsQuery({ id: route.params.id });
  const { data: creditMovies } = useGetCreditMoviesQuery({
    id: route.params.id,
  });

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
          <PersonData
            label="Gender"
            item={person?.gender === 1 ? "Female" : "Male"}
            border
          />
          <PersonData label="Birthday" item={person?.birthday} border />
          <PersonData
            label="Known for"
            item={person?.known_for_department}
            border
          />
          <PersonData
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
      </ScrollView>
    </View>
  );
}
