import { View, Button } from "react-native";

const Login = (props) => {
  return (
    <View>
      <Button
        title="Sign In"
        onPress={() => props.navigation.navigate("MyTravel")}
      />
      <Button
        title="Sign up"
        onPress={() => props.navigation.navigate("Register")}
      />
    </View>
  );
};

export default Login;
