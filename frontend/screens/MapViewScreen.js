import * as React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import _ from "lodash";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLEPLACESAUTOCOMPLETE_API } from "@env";

import APICalls from "../helpers/APICalls";
import CardViewMarker from "../components/MapCard";

const MapViewScreen = (props) => {
  const [loading, setLoading] = React.useState(false);
  const [region, setRegion] = React.useState(props.region);

  const changeRegion = _.debounce(async (newRegion) => {
    setLoading(true);
    const travelData = await APICalls.getTravelData(newRegion, props.pre);
    props.setRegion(newRegion);
    props.setPlaces(travelData);
    setLoading(false);
  }, 2000);

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
            const newRegion = {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: props.region.latitudeDelta,
              longitudeDelta: props.region.longitudeDelta,
            };
            setRegion(newRegion);
            changeRegion(newRegion);
          }}
        />
      </SafeAreaView>
      {loading && (
        <ActivityIndicator style={styles.loading} size="large" color="tomato" />
      )}
      <MapView
        style={styles.map}
        region={region}
        mapType={"standard"}
        onRegionChangeComplete={(newRegion, isGesture = null) => {
          setRegion(newRegion);
          changeRegion(newRegion);
        }}
      >
        {props.places &&
          props.places.map((place, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
              image={require("../assets/map-marker.png")}
              onPress={(data) => {
                const newRegion = {
                  latitude: data.nativeEvent.coordinate.latitude,
                  latitude: data.nativeEvent.coordinate.longitude,
                  latitudeDelta: region.latitudeDelta,
                  longitudeDelta: region.longitudeDelta,
                };
                setRegion(newRegion);
                changeRegion(newRegion);
              }}
            >
              <CardViewMarker placeInfo={place} />
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
    zIndex: 2,
  },
});

export default MapViewScreen;
