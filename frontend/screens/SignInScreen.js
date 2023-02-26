import { View, Button, SafeAreaView } from "react-native";

const Login = (props) => {
  return (
    <View>
      <SafeAreaView>
        <Button
          title="Sign In"
          onPress={() => props.navigation.navigate("BottomTab")}
        />
        <Button
          title="Sign up"
          onPress={() => props.navigation.navigate("SignUpScreen")}
        />
      </SafeAreaView>
    </View>
  );
};

export default Login;
