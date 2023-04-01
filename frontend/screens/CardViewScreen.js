import * as React from "react";
import { Text, View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

import Card from "../components/Card";
import Enum from "../helpers/Enum";

const CardViewScreen = (props) => {
  const initialPlaces = props.places;
  const [places, setPlaces] = React.useState(props.places);
  const [selected, setSelected] = React.useState("type");

  const data = [
    { key: 1, value: Enum.sortBy.DISTANCE },
    { key: 2, value: Enum.sortBy.RATING },
    { key: 3, value: Enum.sortBy.POPULARITY },
    { key: 4, value: Enum.sortBy.TYPE },
  ];

  const sortByNumReviews = (data) => {
    return data.sort((a, b) => b.numReviews - a.numReviews);
  };
  const sortByRating = (data) => {
    return data.sort((a, b) => b.rating - a.rating);
  };
  const sortByDistance = (data) => {
    return data.sort((a, b) => a.distance - b.distance);
  };
  const sortByType = (data) => {
    return data.sort((a, b) =>
      a.type > b.type ? 1 : b.type > a.type ? -1 : 0
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.selectionContainer}>
        <SelectList
          placeholder="Sort by"
          search={false}
          setSelected={(val) => {
            if (val === Enum.sortBy.TYPE) setPlaces(sortByType(places));
            if (val === Enum.sortBy.DISTANCE) setPlaces(sortByDistance(places));
            if (val === Enum.sortBy.RATING) setPlaces(sortByRating(places));
            if (val === Enum.sortBy.POPULARITY)
              setPlaces(sortByNumReviews(places));
            setSelected(val);
          }}
          data={data}
          save="value"
        />
      </View>
      <View style={styles.separator} />
      <FlatList
        horizontal={false}
        data={places}
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
