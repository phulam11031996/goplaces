import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import PreferenceScreen from "../screens/PreferenceScreen";
import CardViewScreen from "../screens/CardViewScreen";
import MapViewScreen from "../screens/MapViewScreen";

const Tab = createBottomTabNavigator();
function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Preference") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "CardView") {
            iconName = focused ? "ios-card" : "ios-card-outline";
          } else {
            iconName = focused ? "ios-map" : "ios-map-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Preference" component={PreferenceScreen} />
      <Tab.Screen name="CardView" component={CardViewScreen} />
      <Tab.Screen name="MapView" component={MapViewScreen} />
    </Tab.Navigator>
  );
}

export default BottomTab;
