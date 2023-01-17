import React from 'react';
import axios from 'axios';

import { View, TouchableOpacity, Text } from 'react-native';

function App(): JSX.Element {
  const handlePress = () => {
    axios.get('http://localhost:5000/helloworld')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;