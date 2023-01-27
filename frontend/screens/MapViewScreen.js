import * as React from "react";
import axios from "axios";
import { View, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLEPLACESAUTOCOMPLETE_API, DEV_BACKEND_URL } from "@env";

import CardViewMarker from "../components/CardViewMarker";

const markerData = [
  {
    title: "Marker something more more more more",
    description: "Description number one.",
    rating: 4,
    imageLocation: "../assets/sample-google-card.jpeg",
    latlng: {
      latitude: 35.2837524,
      longitude: -120.6596156,
    },
  },
  {
    title: "Marker 2",
    description: "Description number two.",
    rating: 3,
    imageLocation: "../assets/sample-google-card.jpeg",
    latlng: {
      latitude: 35.2847524,
      longitude: -120.6566156,
    },
  },
  {
    title: "Marker 3",
    description: "Description number three.",
    rating: 1,
    imageLocation: "../assets/sample-google-card.jpeg",
    latlng: {
      latitude: 35.2857524,
      longitude: -120.6586156,
    },
  },
];
const initialRegion = {
  latitude: 35.2847545,
  longitude: -120.6596156,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

const MapViewScreen = () => {
  const [region, setRegion] = React.useState(initialRegion);

  const getTravelData = () => {
    axios
      .get(DEV_BACKEND_URL)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          onPress={(data, details) => {
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            });
          }}
        />
      </SafeAreaView>
      <MapView style={styles.map} region={region} mapType={"satellite"}>
        {markerData.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            image={require("../assets/map-marker.png")}
            onPress={(data) => {
              setRegion(data.nativeEvent.coordinate);
            }}
          >
            <CardViewMarker
              title={marker.title}
              description={marker.description}
              imageLocation={marker.imageLocation}
              rating={marker.rating}
            />
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
});

export default MapViewScreen;
