import * as React from "react";
import { AirbnbRating } from "@rneui/base";
import { View, StyleSheet } from "react-native";

const CustomRating = (props) => {
  return (
    <View style={styles.container}>
      <AirbnbRating
        count={props.count}
        defaultRating={props.defaultRating}
        isDisabled={props.isDisabled}
        onFinishRating={(val) => {
          props.getPreference(props.label, val);
        }}
        size={props.size}
        reviewSize
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    bottom: 20,
  },
});

export default CustomRating;
