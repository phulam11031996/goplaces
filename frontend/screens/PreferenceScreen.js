import * as React from "react";
import { Text, View, Dimensions, StyleSheet , ActivityIndicator} from "react-native";

import * as Progress from "react-native-progress";
const { width, height } = Dimensions.get("screen");
const PreferenceScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
};

export default PreferenceScreen;
