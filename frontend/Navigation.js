import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import Welcome from "./screens/Welcome";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/Register";

const Stack = createStackNavigator();

const navigate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome to MyTravel" component={Welcome} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="MyTravel"
        component={LoginScreen}
        options={{ headerLeft: null, headerShown: false }}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default navigate;
