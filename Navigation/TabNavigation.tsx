import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeIcon,
  FilmIcon,
  UsersIcon,
  HeartIcon,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolidIcon,
  FilmIcon as FilmSolidIcon,
  UsersIcon as UsersSolidIcon,
  HeartIcon as HeartSolidIcon,
} from "react-native-heroicons/solid";

import HomeScreen from "../screens/HomeScreen";
import MoviesScreen from "../screens/MoviesScreen";
import PeopleScreen from "../screens/PeopleScreen";
import Favorites from "../screens/Favorites";

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#151515",
          borderTopWidth: 0,
          height: 60,
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
          } else if (routeName === "Favorites") {
            return focused ? (
              <HeartSolidIcon color="white" size={25} />
            ) : (
              <HeartIcon color="white" size={25} />
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
        name="Favorites"
        component={Favorites}
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
