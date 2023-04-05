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
import { Formik } from "formik";
import * as yup from "yup";
import _ from "lodash";

import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import APICalls from "../helpers/APICalls";

const signUpValidationSchema = yup.object().shape({
  fullName: yup.string().required("Name is Required"),
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Passsword is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUpScreen = (props) => {
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={signUpValidationSchema}
      validateOnMount={true}
      onSubmit={async (values, actions) => {
        actions.resetForm();
        const newAccount = {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
        };
        const isRegister = await APICalls.register(newAccount);
        if (isRegister) {
          props.navigation.navigate("SignInScreen");
        }
      }}
    >
      {(formikProps) => (
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

            <Text
              style={{ textAlign: "center", color: "#666", marginBottom: 30 }}
            >
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
              inputType="text"
              keyboardType="default"
              fieldButtonFunction={() => {}}
              onChangeText={formikProps.handleChange("fullName")}
              onBlur={formikProps.handleBlur("fullName")}
              value={formikProps.values.fullName}
            />
            {formikProps.errors.fullName && formikProps.touched.fullName ? (
              <Text style={styles.errors}>{formikProps.errors.fullName}</Text>
            ) : (
              <Text style={styles.errors}> </Text>
            )}
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
              fieldButtonFunction={() => {}}
              onChangeText={formikProps.handleChange("email")}
              onBlur={formikProps.handleBlur("email")}
              value={formikProps.values.email}
            />
            {formikProps.errors.email && formikProps.touched.email ? (
              <Text style={styles.errors}>{formikProps.errors.email}</Text>
            ) : (
              <Text style={styles.errors}> </Text>
            )}
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
              onChangeText={formikProps.handleChange("password")}
              onBlur={formikProps.handleBlur("password")}
              value={formikProps.values.password}
            />
            {formikProps.errors.password && formikProps.touched.password ? (
              <Text style={styles.errors}>{formikProps.errors.password}</Text>
            ) : (
              <Text style={styles.errors}> </Text>
            )}
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
              onChangeText={formikProps.handleChange("confirmPassword")}
              onBlur={formikProps.handleBlur("confirmPassword")}
              value={formikProps.values.confirmPassword}
            />
            {formikProps.errors.confirmPassword &&
            formikProps.touched.confirmPassword ? (
              <Text style={styles.errors}>
                {formikProps.errors.confirmPassword}
              </Text>
            ) : (
              <Text style={styles.errors}> </Text>
            )}
            <CustomButton
              label={"Register"}
              onPress={formikProps.handleSubmit}
              disabled={!formikProps.isValid}
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
      )}
    </Formik>
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
  errors: {
    fontSize: 10,
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 8,
  },
});

export default SignUpScreen;
