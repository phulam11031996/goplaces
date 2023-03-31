import * as React from "react";
import { Text, View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import Card from "../components/Card";
import Enum from "../helpers/Enum";

const CardViewScreen = (props) => {
  const [selected, setSelected] = React.useState("Distance");

  const data = [
    { key: 1, value: Enum.sortBy.DISTANCE },
    { key: 2, value: Enum.sortBy.RATING },
    { key: 3, value: Enum.sortBy.POPULARITY },
  ];

  return (
    <SafeAreaView>
      <View style={styles.selectionContainer}>
        <SelectList
          placeholder="Sort by"
          search={false}
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
        />
      </View>
      <View style={styles.separator} />
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
  selectionContainer: {
    margin: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 10,
  },
});

export default CardViewScreen;
