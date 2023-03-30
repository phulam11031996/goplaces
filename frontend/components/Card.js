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

const Card = (props) => {
  const navigation = useNavigation();
  const { photo, name, rating, phone, subtype, numReviews, address_obj } =
    props.placeInfo;

  let shortName = name;
  if (name.length > 35) {
    shortName = name.substring(0, 35) + "...";
  }
  const openCall = () => {
    Linking.openURL(`tel:${phone}`);
  };

  const openMaps = () => {
    const { street1, city, state, postalcode } = address_obj;
    const address = `${street1} ${city} ${state} ${postalcode}`;
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${address}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: photo }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{shortName}</Text>
        <Text style={styles.locationText}>
          {address_obj.city}, {address_obj.state}
        </Text>
        <Text style={styles.text}>{subtype}</Text>
        <View style={styles.text}>
          <Ionicons name="star" size={20} color="#FFC107" />
          <Text style={styles.ratingText}>
            {rating} ({numReviews})
          </Text>
        </View>
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
    height: 280,
    width: "94%",
    backgroundColor: "#F0F2F5",
    borderRadius: 8,
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 20,
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
    marginTop: 5,
    marginBottom: 5,
  },
  locationText: {
    fontSize: 12,
    color: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#1e88e5",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginTop: -10,
  },
  buttonText: {
    color: "white",
  },
});

export default Card;
