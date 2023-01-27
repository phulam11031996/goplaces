import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { Rating } from "react-native-ratings";

const CardViewMarker = (props) => {
  return (
    <View style={styles.bubble}>
      <Text style={styles.title}>{props.title}</Text>
      <Image
        style={styles.image}
        source={require("../assets/sample-google-card.jpeg")}
      />
      <Rating
        imageSize={17}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  bubble: {},
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
