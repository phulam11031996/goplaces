import * as React from "react";
import axios from "axios";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLEPLACESAUTOCOMPLETE_API, DEV_BACKEND_URL } from "@env";

import CardViewMarker from "../components/CardViewMarker";
import * as Progress from "react-native-progress";

const { width, height } = Dimensions.get("screen");

const initialRegion = {
  latitude: 35.2847545,
  longitude: -120.6596156,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

const MapViewScreen = () => {
  const [region, setRegion] = React.useState(initialRegion);
  const [places, setPlaces] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getNewPosition(initialRegion.latitude, initialRegion.longitude);
  }, []);

  const getNewPosition = async (lat, lng) => {
    setLoading(true);
    const travelData = await getTravelData(lat, lng);
    setLoading(false);
    setPlaces(travelData);
  };

  const getTravelData = async (lat, lng) => {
    const params = {
      latitude: lat,
      longitude: lng,
    };
    const travelData = await axios
      .get(DEV_BACKEND_URL + "travelinfo/", { params: params })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return travelData;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.searchBar}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          query={{
            key: GOOGLEPLACESAUTOCOMPLETE_API,
          }}
          onPress={async (data, details) => {
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            });
            getNewPosition(
              details.geometry.location.lat,
              details.geometry.location.lng
            );
          }}
        />
      </SafeAreaView>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="tomato" />
      ) : (
        <Text>Hello</Text>
      )}
      <MapView style={styles.map} region={region} mapType={"standard"}>
        {places &&
          places.map((place, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
              image={require("../assets/map-marker.png")}
              onPress={(data) => {
                setRegion(data.nativeEvent.coordinate);
              }}
            >
              <CardViewMarker name={place.name} photoUrl={place.photoUrl} />
            </Marker>
          ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  searchBar: {
    position: "absolute",
    top: 0,
    width: "90%",
    zIndex: 1,
  },
  loading: {
    position: "absolute",
    zIndex: 1,
  },
});

export default MapViewScreen;
