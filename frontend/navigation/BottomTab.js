import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import PreferenceScreen from "../screens/PreferenceScreen";
import CardViewScreen from "../screens/CardViewScreen";
import MapViewScreen from "../screens/MapViewScreen";
import APICalls from "../helpers/APICalls";

const initialRegion = {
  latitude: 35.2847545,
  longitude: -120.6596156,
  latitudeDelta: 0.006,
  longitudeDelta: 0.006,
};

const Tab = createBottomTabNavigator();
function BottomTab({}) {
  const [region, setRegion] = React.useState(initialRegion);
  const [places, setPlaces] = React.useState([]);

  React.useEffect(() => {
    fetchTravelData(region);
  }, []);

  const fetchTravelData = async (newRegion) => {
    const travelData = await APICalls.getTravelData(newRegion);
    setPlaces(travelData);
  };

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
      <Tab.Screen name="CardView">
        {(props) => <CardViewScreen places={places} />}
      </Tab.Screen>
      <Tab.Screen name="MapView">
        {(props) => (
          <MapViewScreen
            region={region}
            setRegion={setRegion}
            places={places}
            setPlaces={setPlaces}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomTab;
