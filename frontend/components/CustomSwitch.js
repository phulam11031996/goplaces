import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const CustomSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "gray", true: "tomato" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="gray"
        onValueChange={() => {
          setIsEnabled(!isEnabled);
          console.log(!isEnabled);
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
