import * as React from "react";
import { View, StyleSheet, SafeAreaView, Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const HomeScreen = (props) => {

  return (
    <View>
      <SafeAreaView>
        <Button
          title="Go back to Sign In"
          onPress={() => props.navigation.navigate("SignInScreen")}
        />
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
