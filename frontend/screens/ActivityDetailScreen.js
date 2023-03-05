import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ActivityDetailScreen = ({ route }) => {
  const {name, photo, address, webUrl, numReviews} = route.params; 
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: photo }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.label}>Address</Text>
        <View style={styles.addressContainer}>
        <Text style={styles.address}>{address.street1}</Text>
        <Text style={styles.address}>
          {address.city}, {address.state} {address.postalcode}
        </Text>
        <Text style={styles.country}>{address.country}</Text>
        <Text style={styles.label}>Reviews</Text>
        <Text style={styles.numReviews}>numReviews: {numReviews}</Text>
        <Text style={styles.label}> Activity Website </Text> 
        <Text style={styles.webUrl}>{webUrl}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      paddingTop: 20,
      backgroundColor: "#E5F5E5"
    },
    image: {
      width: "100%",
      height: 200,
      resizeMode: "cover",
    },
    name: {
      fontSize: 24,
      fontWeight: "bold",
      marginVertical: 25,
      marginTop: 20
    },
    addressContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 0,
    },
    address: {
      fontSize: 16,
      textAlign: "center",
    },
    country: {
        fontSize: 16, 
        textAlign: "center", 
        marginBottom: 50
    },
    webUrl: {
      fontSize: 13,
      marginVertical: 10,
      textDecorationLine: "underline",
      marginTop: 0
    },
    numReviews: {
        fontSize: 16,
        marginVertical: 10, 
        textAlign: "center",
        marginTop: 0, 
        marginBottom: 50
    }, 
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5
    },
  });

export default ActivityDetailScreen; 
