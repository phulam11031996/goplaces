import * as React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

import CustomRating from "../components/CustomRating";
import CustomSlider from "../components/CustomSlider";
import CustomSwitch from "../components/CustomSwitch";
import preference from "../helpers/Enum";

const PreferenceScreen = (props) => {
  const DATA = [
    {
      title: "Location Settings",
      data: [
        {
          label: preference.RESTAURANTS,
          component: (
            <CustomSwitch
              label={preference.RESTAURANTS}
              getPreference={props.getPreference}
            />
          ),
        },
        {
          label: preference.HOTELS,
          component: (
            <CustomSwitch
              label={preference.HOTELS}
              getPreference={props.getPreference}
            />
          ),
        },
        {
          label: preference.ATTRACTIONS,
          component: (
            <CustomSwitch
              label={preference.ATTRACTIONS}
              getPreference={props.getPreference}
            />
          ),
        },
      ],
    },
    {
      title: "Recommendation Systems",
      data: [
        {
          label: preference.ITEMBASED,
          component: (
            <CustomSwitch
              label={preference.ITEMBASED}
              getPreference={props.getPreference}
            />
          ),
        },
        {
          label: preference.USERBASED,
          component: (
            <CustomSwitch
              label={preference.USERBASED}
              getPreference={props.getPreference}
            />
          ),
        },
        {
          label: preference.CONTENTBASED,
          component: (
            <CustomSwitch
              label={preference.CONTENTBASED}
              getPreference={props.getPreference}
            />
          ),
        },
      ],
    },
    {
      title: "Others",
      data: [
        {
          label: preference.DISTANCE,
          component: (
            <CustomSlider
              label={preference.DISTANCE}
              getPreference={props.getPreference}
            />
          ),
        },
        {
          label: preference.RATING,
          component: (
            <CustomRating
              count={5}
              defaultRating={1}
              isDisabled={false}
              size={20}
              label={preference.RATING}
              getPreference={props.getPreference}
            />
          ),
        },
      ],
    },
  ];

  const renderSectionHeader = ({ section }) => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemLabel}>{item.label}</Text>
      <View>{item.component}</View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    fontSize: 18,
    fontWeight: "500",
  },
});

export default PreferenceScreen;
