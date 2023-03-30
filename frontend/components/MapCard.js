import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardViewMarker = ({ placeInfo }) => {
  const { name, photo, rating, numReviews, subtype } = placeInfo || {};

  let shortName = name;
  if (name.length > 20) {
    shortName = name.substring(0, 20) + "...";
  }
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {photo && <Image style={styles.image} source={{ uri: photo }} />}
        {!photo && (
          <Image
            style={styles.image}
            source={require("../assets/no-image-found.png")}
          />
        )}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{shortName}</Text>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={13} color="#FFC107" />
          <Text style={styles.rating}>
            {rating} ({numReviews})
          </Text>
        </View>
        <Text style={styles.subtype}>{subtype}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButtonCall}>
          <Ionicons name="compass-outline" size={16} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButtonStart}>
          <Ionicons name="call-outline" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.arrow}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 65,
    width: 300,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "stretch",
    top: -80,
    left: -143,
  },
  imageContainer: {
    marginRight: 8,
  },
  image: {
    height: 65,
    width: 75,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  infoContainer: {
    flex: 0,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  rating: {
    marginLeft: 5,
    fontSize: 11,
    color: "gray",
  },
  subtype: {
    fontSize: 12,
    color: "black",
  },
  actionsContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  actionButtonCall: {
    backgroundColor: "#007AFF",
    borderTopEndRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  actionButtonStart: {
    borderTopWidth: 1,
    backgroundColor: "#007AFF",
    borderBottomEndRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  actionText: {
    color: "#fff",
    fontWeight: "bold",
  },
  arrow: {
    position: "absolute",
    bottom: -10,
    left: 150,
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#fff",
    transform: [{ rotate: "180deg" }],
    shadowColor: "#000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});

export default CardViewMarker;
