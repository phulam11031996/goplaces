import * as React from "react";
import { Text, View, FlatList, StyleSheet, SafeAreaView } from "react-native";

import Card from "../components/Card";

const CardViewScreen = (props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
      <FlatList
        horizontal={false}
        data={props.places}
        renderItem={({ item }) => <Card placeInfo={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 280,
    width: "100%",
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
});

export default CardViewScreen;
