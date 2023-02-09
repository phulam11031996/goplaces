import * as React from "react";
import { SafeAreaView, Image, View } from "react-native";

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Image
          source={require("../assets/login-logo.png")}
          height={300}
          width={300}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
