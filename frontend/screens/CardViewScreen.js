import * as React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

import CardList from "../components/CardList";

const CardViewScreen = (props) => {
  const navigation = useNavigation(); 
  return (
    <View>
      <CardList places={props.places} navigation={navigation} />
    </View>
  );
};

export default CardViewScreen;
