import * as React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomRating from "../components/CustomRating";
import CustomSlider from "../components/CustomSlider";
import CustomSwitch from "../components/CustomSwitch";

const DATA = [
  {
    title: "Location Settings",
    data: [
      {
        label: "Restaurants",
        component: <CustomSwitch />,
      },
      {
        label: "Hotels",
        component: <CustomSwitch />,
      },
      {
        label: "Attractions",
        component: <CustomSwitch />,
      },
    ],
  },
  {
    title: "Recommendation Systems",
    data: [
      {
        label: "Item-based",
        component: <CustomSwitch />,
      },
      {
        label: "User-based",
        component: <CustomSwitch />,
      },
      {
        label: "Content-based",
        component: <CustomSwitch />,
      },
    ],
  },
  {
    title: "Others",
    data: [
      {
        label: "Distance",
        component: <CustomSlider />,
      },
      {
        label: "Rating",
        component: <CustomRating />,
      },
    ],
  },
];

const PreferenceScreen = () => {
  const renderSectionHeader = ({ section }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemLabel}>{item.label}</Text>
      <View style={styles.itemComponentContainer}>{item.component}</View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.header}>Preference</Text>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  header: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    fontSize: 24,
    fontWeight: "bold",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    backgroundColor: "#F0F2F5",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  itemContainer: {
    flexDirection: "row",
    // flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EFEFEF",
  },
  itemLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  itemComponentContainer: {
    flex: 0,
  },
});

export default PreferenceScreen;
