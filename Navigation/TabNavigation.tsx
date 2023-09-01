import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  FilmIcon,
  TvIcon,
  UsersIcon,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolidIcon,
  FilmIcon as FilmSolidIcon,
  TvIcon as TvSolidIcon,
  UsersIcon as UsersSolidIcon,
} from "react-native-heroicons/solid";

import HomeScreen from "../screens/HomeScreen";
import MoviesScreen from "../screens/MoviesScreen";
import TvScreen from "../screens/TvScreen";
import PeopleScreen from "../screens/PeopleScreen";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#191919",
        },
        tabBarLabelStyle: {
          display: "none",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let routeName = route.name;

          if (routeName === "Home") {
            return focused ? (
              <HomeSolidIcon color="white" size={25} />
            ) : (
              <HomeIcon color="white" size={25} />
            );
          } else if (routeName === "Movies") {
            return focused ? (
              <FilmSolidIcon color="white" size={25} />
            ) : (
              <FilmIcon color="white" size={25} />
            );
          } else if (routeName === "Tv") {
            return focused ? (
              <TvSolidIcon color="white" size={25} />
            ) : (
              <TvIcon color="white" size={25} />
            );
          } else if (routeName === "People") {
            return focused ? (
              <UsersSolidIcon color="white" size={25} />
            ) : (
              <UsersIcon color="white" size={25} />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Tv"
        component={TvScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="People"
        component={PeopleScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
