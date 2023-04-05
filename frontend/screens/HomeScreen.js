import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import NoPlaceCard from "../components/NoPlaceCard";

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.childContainer}>
        <SectionTitle title={"Saved"} />
        {props.savedPlaces.length === 0 && (
          <NoPlaceCard title={"No saved places"} />
        )}
        {props.savedPlaces.length !== 0 && (
          <FlatList
            horizontal={true}
            data={props.savedPlaces}
            renderItem={({ item }) => (
              <Card
                fetchVisitedPlaces={props.fetchVisitedPlaces}
                fetchSavedPlaces={props.fetchSavedPlaces}
                placeInfo={item}
                email={props.email}
              />
            )}
            keyExtractor={(item) => item.locationId}
          />
        )}
      </View>
      <View style={styles.childContainer}>
        <SectionTitle title={"Visited"} />
        {props.visitedPlaces.length === 0 && (
          <NoPlaceCard title={"No visited places"} />
        )}
        {props.visitedPlaces.length !== 0 && (
          <FlatList
            horizontal={true}
            data={props.visitedPlaces}
            renderItem={({ item }) => (
              <Card
                fetchSavedPlaces={props.fetchSavedPlaces}
                fetchVisitedPlaces={props.fetchVisitedPlaces}
                placeInfo={item}
                email={props.email}
              />
            )}
            keyExtractor={(item) => item.locationId}
          />
        )}
      </View>
      <View style={styles.childContainer}>
        <SectionTitle title={"Recommendations"} />
        <NoPlaceCard title={"No recommended places"} />
      </View>
      <View style={styles.childContainer}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => props.navigation.navigate("SignInScreen")}
        >
          <Text style={styles.logoutText}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  childContainer: {
    marginBottom: 10,
  },
  logoutButton: {
    borderRadius: 8,
    backgroundColor: "tomato",
    marginHorizontal: "35%",
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
