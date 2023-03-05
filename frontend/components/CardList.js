import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

const CardViewScreen = (props) => {
  const [places, setPlaces] = React.useState([]);

  React.useEffect(() => {
    setPlaces(props.places);
  }, [props]);

  const _renderItem = ({ item, index }) => {
    // console.log(item); 
    return (
      <TouchableOpacity style={styles.card}
        onPress={() => props.navigation.navigate("ActivityDetailScreen", 
        {name: item.name,
        photo: item.photo, 
        address: item.address_obj,
        webUrl: item.webUrl,
        numReviews: item.numReviews})}>
        <Image
          style={styles.cardImage}
          source={{
            uri: item.photo,
          }}
          onError={(error) => console.log(error)}
        />
        <Text style={styles.cardText}>{item.name} </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        style={styles.container}
        data={places}
        keyExtractor={(item, index) => index.toString()}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  cardText: {
    fontSize: 16,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

export default CardViewScreen;
