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
const BottomTab = ({ route }) => {
  const { email } = route.params.userInfo;

  const [savedPlaces, setSavedPlaces] = React.useState([]);
  const [visitedPlaces, setVisitedPlaces] = React.useState([]);
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
    fetchSavedPlaces();
    fetchVisitedPlaces();
  }, []);

  const fetchTravelData = async (newRegion) => {
    const places = await APICalls.getTravelData(newRegion, pre);
    setPlaces(places);
  };

  const fetchSavedPlaces = async () => {
    const places = await APICalls.fetchSavedPlaces(email);
    setSavedPlaces(places);
  };

  const fetchVisitedPlaces = async () => {
    const places = await APICalls.fetchVisitedPlaces(email);
    setVisitedPlaces(places);
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
      <Tab.Screen name="Home">
        {(props) => (
          <HomeScreen
            fetchVisitedPlaces={fetchVisitedPlaces}
            fetchSavedPlaces={fetchSavedPlaces}
            savedPlaces={savedPlaces}
            visitedPlaces={visitedPlaces}
            email={email}
            navigation={props.navigation}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Preference">
        {(props) => <PreferenceScreen getPreference={getPreference} />}
      </Tab.Screen>
      <Tab.Screen name="CardView">
        {(props) => (
          <CardViewScreen
            fetchVisitedPlaces={fetchVisitedPlaces}
            fetchSavedPlaces={fetchSavedPlaces}
            places={places}
            email={email}
          />
        )}
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
