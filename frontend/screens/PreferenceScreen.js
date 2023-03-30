import * as React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

import CustomRating from "../components/CustomRating";
import CustomSlider from "../components/CustomSlider";
import CustomSwitch from "../components/CustomSwitch";
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
      title: "Recommendation Systems",
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
        {
          label: Enum.preference.USERBASED,
          component: (
            <CustomSwitch
              label={Enum.preference.USERBASED}
              getPreference={props.getPreference}
            />
          ),
        },
        {
          label: Enum.preference.CONTENTBASED,
          component: (
            <CustomSwitch
              label={Enum.preference.CONTENTBASED}
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
