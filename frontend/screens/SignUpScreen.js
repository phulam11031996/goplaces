import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";

const SignUpScreen = (props) => {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.logo}
            height={100}
            width={100}
            source={require("../assets/app-logo.png")}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            marginBottom: 30,
            fontWeight: "700",
          }}
        >
          Sign Up
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Ionicons
              name="logo-facebook"
              size={24}
              color="#4267B2"
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Ionicons
              name="logo-google"
              size={24}
              color="#DB4437"
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: "#ddd",
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}
          >
            <Ionicons
              name="logo-twitter"
              size={24}
              color="#1DA1F2"
              style={{ marginRight: 5 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={{ textAlign: "center", color: "#666", marginBottom: 30 }}>
          Or, register with email ...
        </Text>

        <InputField
          label={"Full Name"}
          icon={
            <Ionicons
              name="ios-at-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="alternate-email"
          keyboardType="email-address"
          fieldButtonFunction={() => {}}
          onChangeText={setFullName}
          value={fullName}
        />
        <InputField
          label={"Email Id"}
          icon={
            <Ionicons
              name="ios-at-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="alternate-email"
          keyboardType="email-address"
          fieldButtonFunction={() => {}}
          onChangeText={setEmail}
          value={email}
        />
        <InputField
          label={"Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonFunction={() => {}}
          onChangeText={setPassword}
          value={password}
        />
        <InputField
          label={"Confirm Password"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonFunction={() => {}}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
        />
        <CustomButton
          label={"Register"}
          onPress={() => {
            console.log(fullName);
            console.log(email);
            console.log(password);
            console.log(confirmPassword);
            props.navigation.navigate("SignInScreen");
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SignInScreen")}
          >
            <Text style={{ color: "dodgerblue", fontWeight: "700" }}>
              {" "}
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  logo: {
    marginBottom: 50,
    borderRadius: 10,
    width: 50,
    height: 50,
    transform: [{ rotate: "-10deg" }],
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    padding: 10,
  },
  button: {
    backgroundColor: "tomato",
    padding: 10,
  },
});

export default SignUpScreen;
