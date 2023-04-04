import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignInScreen";
import SignUp from "../screens/SignUpScreen";
import BottomTab from "./BottomTab";
import ActivityDetailScreen from "../screens/ActivityDetailScreen";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityDetailScreen"
        component={ActivityDetailScreen}
        options={{headerBackTitle : "Back"}}
      />
    </Stack.Navigator>
  );
};

export default NavigationStack;
