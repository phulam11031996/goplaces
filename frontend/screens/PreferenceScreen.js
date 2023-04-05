import * as React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

import CustomRating from "../components/CustomRating";
import CustomSlider from "../components/CustomSlider";
import CustomSwitch from "../components/CustomSwitch";
import SectionTitle from "../components/SectionTitle";
import Enum from "../helpers/Enum";

const PreferenceScreen = (props) => {
  const DATA = [
    {
      title: "Location Settings",
      data: [
        {
          label: Enum.preference.RESTAURANTS,
          component: (
            <CustomSwitch
              label={Enum.preference.RESTAURANTS}
              getPreference={props.getPreference}
            />
          ),
        },
        {
          label: Enum.preference.HOTELS,
          component: (
            <CustomSwitch
              label={Enum.preference.HOTELS}
              getPreference={props.getPreference}
            />
          ),
        },
        {
          label: Enum.preference.ATTRACTIONS,
          component: (
            <CustomSwitch
              label={Enum.preference.ATTRACTIONS}
              getPreference={props.getPreference}
            />
          ),
        },
      ],
    },
    {
      title: "Recommendation System",
      data: [
        {
          label: Enum.preference.ITEMBASED,
          component: (
            <CustomSwitch
              label={Enum.preference.ITEMBASED}
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
          label: Enum.preference.DISTANCE,
          component: (
            <CustomSlider
              label={Enum.preference.DISTANCE}
              getPreference={props.getPreference}
            />
          ),
        },
        {
          label: Enum.preference.RATING,
          component: (
            <CustomRating
              count={5}
              defaultRating={1}
              isDisabled={false}
              size={20}
              label={Enum.preference.RATING}
              getPreference={props.getPreference}
            />
          ),
        },
      ],
    },
  ];

  const renderSectionHeader = ({ section }) => (
    <SectionTitle title={section.title} />
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
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "gray",
  },
  itemLabel: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
  },
});

export default PreferenceScreen;
