import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const InputField = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingBottom: 8,
      }}
    >
      {props.icon}
      {props.inputType == "password" ? (
        <TextInput
          style={{ flex: 1, paddingVertical: 0 }}
          placeholder={props.label}
          keyboardType={props.keyboardType}
          secureTextEntry={true}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          value={props.value}
        />
      ) : (
        <TextInput
          style={{ flex: 1, paddingVertical: 0 }}
          placeholder={props.label}
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
          onBlur={props.onBlur}
          value={props.value}
        />
      )}
      <TouchableOpacity onPress={props.fieldButtonFunction}>
        <Text style={{ color: "dodgerblue", fontWeight: "700" }}>
          {props.fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputField;
