import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { persistor, store } from "./store";
import TabNavigation from "./Navigation/TabNavigation";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import PersonDetailsScreen from "./screens/PersonDetailsScreen";
import SearchScreen from "./screens/SearchScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Tab"
              component={TabNavigation}
              options={{ animation: "default" }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="MovieDetails"
              component={MovieDetailsScreen}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="PersonDetails"
              component={PersonDetailsScreen}
              options={{ animation: "slide_from_right" }}
            />
            <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={{ animation: "slide_from_right" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
