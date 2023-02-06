import * as React from "react";
import { Text, View } from "react-native";

import * as Progress from "react-native-progress";

const PreferenceScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Progress.Bar  progress={0.3} width={200} />
    </View>
  );
};

export default PreferenceScreen;
