import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTab from "./components/BottomTab";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default App;
