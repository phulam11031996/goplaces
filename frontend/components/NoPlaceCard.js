import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

const NoPlaceCard = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    margin: "3%",
    backgroundColor: "#F0F2F5",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default NoPlaceCard;
