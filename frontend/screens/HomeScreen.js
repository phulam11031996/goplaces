import * as React from "react";
import { View, StyleSheet, SafeAreaView, Text, Button} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <SafeAreaView>
        <Text>{props.region}</Text> 
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
