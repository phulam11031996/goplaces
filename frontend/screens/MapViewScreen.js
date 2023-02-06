import * as React from "react";
import axios from "axios";
import { View, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLEPLACESAUTOCOMPLETE_API, DEV_BACKEND_URL } from "@env";

import CardViewMarker from "../components/CardViewMarker";
import * as Progress from "react-native-progress";

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
    setLoading(false);
  }, []);

  const getNewPosition = async (lat, lng) => {
    const travelData = await getTravelData(lat, lng);
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
            console.log(details.geometry.location.lat);
            console.log(details.geometry.location.lng);
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
      <MapView style={styles.map} region={region} mapType={"standard"}>
        {loading ? (
          <Progress.Bar style={styles.loading} progress={0.3} width={200} />
        ) : (
          places &&
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
          ))
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  searchBar: {
    position: "absolute",
    zIndex: 1,
    width: "90%",
  },
  loading: {
    position: "absolute-top",
  },
});

export default MapViewScreen;
