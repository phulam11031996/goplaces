import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const CustomSwitch = (props) => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "gray", true: "tomato" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="gray"
        onValueChange={() => {
          setIsEnabled(!isEnabled);
          props.getPreference(props.label, !isEnabled);
        }}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomSwitch;
