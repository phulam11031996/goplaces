import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Card from "../components/HomeCard";

const fakeData = [
  {
    address_obj: {
      city: "San Luis Obispo",
      country: "United States",
      postalcode: "93401-3521",
      state: "CA",
      street1: "751 Palm St",
      street2: "",
    },
    distance: "0.666666",
    description:
      "Founded on September 1, 1772, this is considered one of the most beautiful missions in California and still serves as an active church in the community.",
    isClosed: false,
    latitude: "35.28063",
    longitude: "-120.66481",
    name: "This is a really long name. It can't holdlfksdjf lksdjf ldskjf ldskj fldskj fldskj fldskj f",
    numReviews: "689",
    phone: "+1 805-781-8220",
    photo:
      "https://media-cdn.tripadvisor.com/media/photo-s/0f/40/ec/5f/beautiful-historic-california.jpg",
    ranking_subcategory: "#7 of 69 things to do in San Luis Obispo",
    rating: "4.5",
    subtype: "Missions",
    webUrl:
      "https://www.tripadvisor.com/Attraction_Review-g33026-d128038-Reviews-Mission_San_Luis_Obispo_de_Tolosa-San_Luis_Obispo_San_Luis_Obispo_County_California.html",
  },
];

const HomeScreen = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Visited</Text>
      </View>
      <FlatList
        horizontal={true}
        data={fakeData}
        renderItem={({ item }) => <Card placeInfo={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Recommended</Text>
      </View>
      <FlatList
        horizontal={true}
        data={fakeData}
        renderItem={({ item }) => <Card placeInfo={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>
      <FlatList
        horizontal={true}
        data={fakeData}
        renderItem={({ item }) => <Card placeInfo={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={props.onPress}>
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
