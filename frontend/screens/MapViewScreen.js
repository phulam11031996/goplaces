import * as React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const markerData = [
  {
    title: "Marker 1",
    description: "Description number one.",
    latlng: {
      latitude: 35.2837524,
      longitude: -120.6596156,
    },
  },
  {
    title: "Marker 2",
    description: "Description number two.",
    latlng: {
      latitude: 35.2847524,
      longitude: -120.6596156,
    },
  },
  {
    title: "Marker 3",
    description: "Description number three.",
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
    latitudeDelta: 0.00500,
    longitudeDelta: 0.00500,
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
            image={require("../assets/map_marker.png")}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
    height: "100%",
  },
});

export default MapViewScreen;
