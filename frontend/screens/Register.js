import { View, Text, Button } from "react-native";

const Register = (props) => {
  return (
    <View>
      <Text> Sign Up Page </Text>
      <Button
        title="Go back to Sign In"
        onPress={() => props.navigation.navigate("Welcome to MyTravel")}
      />
    </View>
  );
};

export default Register;
