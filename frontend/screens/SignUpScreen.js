import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Register = (props) => {
  return (
    <View>
      <SafeAreaView>
        <Button
          title="Go back to Sign In"
          onPress={() => props.navigation.navigate("SignInScreen")}
        />
      </SafeAreaView>
    </View>
  );
};

export default Register;
