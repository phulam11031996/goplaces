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

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>
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
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Visited</Text>
      </View>
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
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Recommended</Text>
      </View>
      <View style={styles.logoutContainer}>
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
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: "#F0F2F5",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  logoutContainer: {
    alignItems: "flex-start",
    margin: 16,
  },
  logoutButton: {
    backgroundColor: "tomato",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  logoutText: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
