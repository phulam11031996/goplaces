import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";

const CardViewMarker = (props) => {
  return (
    <View style={styles.bubble}>
      <Text style={styles.title}>{props.name}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <Rating imageSize={17} ratingCount={5} readonly startingValue={5} />
      <View style={styles.arrow} />
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    position: "absolute",
    bottom: 15,
    left: -31,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 12,
    alignSelf: "center",
    marginTop: -25,
    top: 27,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 5,
    maxWidth: 90,
    maxHeight: 30,
  },
  image: {
    width: 90,
    height: 60,
    marginBottom: 5,
  },
});

export default CardViewMarker;
