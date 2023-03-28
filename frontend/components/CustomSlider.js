import * as React from "react";
import { Slider } from "@rneui/base";
import { Text, View, StyleSheet } from "react-native";

const CustomeSlider = (props) => {
  const [distance, setDistance] = React.useState(20);
  const state = {
    minDistance: 10,
    maxDistance: 30,
  };
  return (
    <View style={styles.container}>
      <Slider
        style={{ width: 270 }}
        step={1}
        minimumValue={state.minDistance}
        maximumValue={state.maxDistance}
        value={distance}
        onValueChange={(val) => {
          setDistance(val);
          props.getPreference(props.label, val);
        }}
        thumbTintColor="tomato"
        maximumTrackTintColor="gray"
        minimumTrackTintColor="black"
        thumbStyle={{ height: 20, width: 20 }}
      />
      <View style={styles.textCon}>
        <Text style={styles.colorGrey}>{state.minDistance} km</Text>
        <Text style={styles.colorYellow}>{distance + "km"}</Text>
        <Text style={styles.colorGrey}>{state.maxDistance}+ km</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textCon: {
    width: 270,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorGrey: {
    color: "black",
  },
  colorYellow: {
    color: "black",
  },
});
export default CustomeSlider;
