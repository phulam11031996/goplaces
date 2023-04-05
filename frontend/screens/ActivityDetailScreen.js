import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CustomRating from "../components/CustomRating";

const ActivityDetailScreen = ({ route }) => {
  const placeInfo = route.params.placeInfo;

  const openMaps = () => {
    Linking.openURL(`https://www.google.com/maps/place/${placeInfo.address}`);
  };

  const callNumber = () => {
    const phoneNumber = placeInfo.phone;
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: placeInfo.photo }} />
      <View style={styles.box}>
        <Text style={styles.name}>{placeInfo.name}</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{placeInfo.description}</Text>
        <Text style={styles.label}>Type:</Text>
        <Text style={styles.value}>{placeInfo.type}</Text>
        <Text style={styles.label}>Subtype:</Text>
        <Text style={styles.value}>{placeInfo.subtype}</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Address</Text>
        <TouchableOpacity onPress={openMaps}>
          <Text style={[styles.value, styles.link]}>{placeInfo.address}</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Website:</Text>
        <TouchableOpacity onPress={() => Linking.openURL(placeInfo.webUrl)}>
          <Text style={[styles.link, styles.value]}>{placeInfo.webUrl}</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Phone:</Text>
        <TouchableOpacity onPress={callNumber}>
          <Text style={[styles.link, styles.value]}>{placeInfo.phone}</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Hours:</Text>
        <Text style={styles.value}>
          {placeInfo.isClosed ? "Open" : "Closed"}
        </Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.label}>Rating:</Text>
        <CustomRating
          count={5}
          defaultRating={placeInfo.rating}
          isDisabled={true}
          size={15}
        />
        <Text style={styles.label}>Number of Reviews:</Text>
        <Text style={styles.value}>{placeInfo.numReviews}</Text>
        <Text style={styles.label}>Reward:</Text>
        <Text style={styles.value}>{placeInfo.ranking_subcategory}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  box: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    //  flexDirection: "row",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    marginBottom: 10,
  },
  showHorizontal: {
    flexDirection: "row",
  },
});

export default ActivityDetailScreen;
