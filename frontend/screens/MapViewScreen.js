import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, Button } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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
      longitude: -120.6596156,
    },
  },
  {
    title: "Marker 3",
    description: "Description number three.",
    rating: 1,
    imageLocation: "../assets/sample-google-card.jpeg",
    latlng: {
      latitude: 35.2857524,
      longitude: -120.6596156,
    },
  },
];

const MapViewScreen = () => {
  const [region, setRegion] = React.useState({
    latitude: 35.2847545,
    longitude: -120.6596156,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.searchBar}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          query={{
            key: "AIzaSyC5H2FM0yYE2AgV750u977sqAHuD0P5QGo",
          }}
          onPress={(data, details = null) => {
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
            });
          }}
        />
      </SafeAreaView>
      <MapView style={styles.map} region={region}>
        {markerData.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            image={require("../assets/map-marker.png")}
            onPress={(data) => {
              setRegion(data.nativeEvent.coordinate);
            }}
          >
            <Callout>
              <CardViewMarker
                title={marker.title}
                description={marker.description}
                imageLocation={marker.imageLocation}
                rating={marker.rating}
              />
            </Callout>
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
