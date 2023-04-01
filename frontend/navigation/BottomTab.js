import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import PreferenceScreen from "../screens/PreferenceScreen";
import CardViewScreen from "../screens/CardViewScreen";
import MapViewScreen from "../screens/MapViewScreen";
import APICalls from "../helpers/APICalls";
import Enum from "../helpers/Enum";

const initialRegion = {
  latitude: 35.2847545,
  longitude: -120.6596156,
  latitudeDelta: 0.006,
  longitudeDelta: 0.006,
};

const Tab = createBottomTabNavigator();
const BottomTab = (props) => {
  const [region, setRegion] = React.useState(initialRegion);
  const [places, setPlaces] = React.useState([]);
  const [pre, setPre] = React.useState({
    restaurants: true,
    hotels: true,
    attractions: true,
    recommendations: true,
    distance: 20,
    rating: 1,
  });

  React.useEffect(() => {
    fetchTravelData(region);
  }, []);

  const fetchTravelData = async (newRegion) => {
    const travelData = await APICalls.getTravelData(newRegion, pre);
    setPlaces(travelData);
  };
  const getPreference = (pree, value) => {
    switch (pree) {
      case Enum.preference.RESTAURANTS:
        setPre((prevState) => ({
          ...prevState,
          restaurants: value,
        }));
        break;
      case Enum.preference.HOTELS:
        setPre((prevState) => ({
          ...prevState,
          hotels: value,
        }));
        break;
      case Enum.preference.ATTRACTIONS:
        setPre((prevState) => ({
          ...prevState,
          attractions: value,
        }));
      case Enum.preference.ITEMBASED:
        setPre((prevState) => ({
          ...prevState,
          recommendations: value,
        }));
        break;
      case Enum.preference.USERBASED:
        setPre((prevState) => ({
          ...prevState,
          recommendations: value,
        }));
        break;
      case Enum.preference.CONTENTBASED:
        setPre((prevState) => ({
          ...prevState,
          recommendations: value,
        }));
        break;
      case Enum.preference.DISTANCE:
        setPre((prevState) => ({
          ...prevState,
          distance: value,
        }));
        break;
      case Enum.preference.RATING:
        setPre((prevState) => ({
          ...prevState,
          rating: value,
        }));
        break;
      default:
        console.log("Shouldn't get here");
    }
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
        headerShown:
          route.name === "Home" || route.name === "Preference" ? true : false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Preference">
        {(props) => <PreferenceScreen getPreference={getPreference} />}
      </Tab.Screen>
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
            pre={pre}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTab;
