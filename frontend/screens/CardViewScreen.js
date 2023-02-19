import * as React from "react";
import { View } from "react-native";

import CardList from "../components/CardList";

const CardViewScreen = (props) => {
  return (
    <View>
      <CardList places={props.places} />
    </View>
  );
};

export default CardViewScreen;
