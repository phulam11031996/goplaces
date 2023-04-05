import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import APICalls from "../helpers/APICalls";

const Card = (props) => {
  const navigation = useNavigation();
  const {
    photo,
    name,
    rating,
    phone,
    subtype,
    numReviews,
    address,
    type,
    distance,
    price,
    isClosed,
  } = props.placeInfo;


  const distanceStr = parseFloat(distance).toFixed(1);

  let shortName = name;
  if (name.length > 35) {
    shortName = name.substring(0, 35) + "...";
  }
  const openCall = () => {
    Linking.openURL(`tel:${phone}`);
  };

  const openMaps = async () => {
    await APICalls.postVisitedPlaces(props.email, props.placeInfo);
    props.fetchVisitedPlaces();
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${address}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photo }} style={styles.image} />
        <TouchableOpacity
          style={styles.saveButton}
          onPress={async () => {
            await APICalls.postSavePlace(props.email, props.placeInfo);
            props.fetchSavedPlaces();
          }}
        >
          <Ionicons name="bookmark" size={20} color="tomato" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{shortName}</Text>
        {type === "Hotel" && <Text style={styles.typeText}>{type}</Text>}
        {!(type === "Hotel") && (
          <Text style={styles.typeText}>
            {type}: {subtype}
          </Text>
        )}
        {isClosed && <Text style={styles.closedText}>Now Closed</Text>}
        {!isClosed && <Text style={styles.openedText}>Now Open</Text>}
        <View style={styles.text}>
          <Ionicons name="star" size={15} color="#FFC107" />
          <Text>
            {" "}
            {rating} ({numReviews})
          </Text>
        </View>
        {(type === "Restaurant" || type === "Hotel") && (
          <Text style={styles.text}>Price: {price}</Text>
        )}
        <Text style={styles.text}>Distance: {distanceStr} km</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={openMaps} style={styles.button}>
            <Ionicons name="location-sharp" size={20} color="#fff" />
            <Text style={styles.buttonText}>Direction</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openCall} style={styles.button}>
            <Ionicons name="call" size={20} color="#fff" />
            <Text style={styles.buttonText}>Call</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ActivityDetailScreen", props)}
          >
            <Ionicons
              name="ellipsis-horizontal-circle"
              size={20}
              color="#fff"
            />
            <Text style={styles.buttonText}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 365,
    backgroundColor: "#F0F2F5",
    borderRadius: 8,
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 32,
  },
  imageContainer: {
    height: 130,
    overflow: "hidden",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 1,
    marginBottom: 5,
  },
  typeText: {
    fontSize: 12,
    color: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "#1e88e5",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 5,
  },
  buttonText: {
    color: "white",
  },
  closedText: {
    marginTop: 4,
    color: "red",
  },
  openedText: {
    marginTop: 4,
    marginBottom: 4,
    color: "green",
  },
  saveButton: {
    position: "absolute",
    top: 8,
    right: 8,
    borderRadius: 20,
    padding: 5,
    elevation: 3,
    borderColor: "tomato",
    borderWidth: 1,
  },
});

export default Card;
