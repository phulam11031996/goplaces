import * as React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeCard = (props) => {
  const { photo, name, rating, phone } = props.placeInfo;
  return (
    <View style={styles.item}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photo }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={20} color="#FFC107" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  item: {
    backgroundColor: "#F0F2F5",
    borderRadius: 8,
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    height: 150,
    overflow: "hidden",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 4,
  },
  phone: {
    fontSize: 16,
    color: "#888",
  },
});

export default HomeCard;
