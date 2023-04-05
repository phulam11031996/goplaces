import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

const SectionTitle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0F2F5",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default SectionTitle;
