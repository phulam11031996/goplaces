import * as React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SafeAreaView style={styles.searchBar}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          query={{
            key: "AIzaSyC5H2FM0yYE2AgV750u977sqAHuD0P5QGo",
            language: "en",
          }}
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          onPress={(details) => {
            console.log(details);
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    width: "90%",
    height: "100%",
  },
});

export default HomeScreen;
