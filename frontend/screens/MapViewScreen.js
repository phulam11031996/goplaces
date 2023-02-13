import * as React from "react";
import axios from "axios";
import _ from "lodash";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLEPLACESAUTOCOMPLETE_API, DEV_BACKEND_URL } from "@env";

const initialRegion = {
  latitude: 35.2847545,
  longitude: -120.6596156,
  latitudeDelta: 0.006,
  longitudeDelta: 0.006,
};

const MapViewScreen = () => {
  const [region, setRegion] = React.useState(initialRegion);
  const [places, setPlaces] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getNewPosition(initialRegion);
  }, []);

  const getNewPosition = _.debounce(async (newRegion) => {
    setLoading(true);
    const travelData = await getTravelData(newRegion);
    setLoading(false);
    setPlaces(travelData);
  }, 2000);

  const getTravelData = async (region) => {
    const travelData = await axios
      .get(DEV_BACKEND_URL + "travelinfo/", { params: region })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
      setTravelData(travelData);
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
            const newRegion = {
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            };
            setRegion(newRegion);
            getNewPosition(newRegion);
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
          getNewPosition(newRegion);
        }}
      >
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
                const newRegion = {
                  latitude: data.nativeEvent.coordinate.latitude,
                  latitude: data.nativeEvent.coordinate.longitude,
                  latitudeDelta: region.latitudeDelta,
                  longitudeDelta: region.longitudeDelta,
                };
                setRegion(newRegion);
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
    zIndex: 1,
  },
});

export default MapViewScreen;
