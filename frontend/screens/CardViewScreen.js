import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";

export default class CardViewScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  getDataFromAPI = async () => {
    const endPoint = "https://jsonplaceholder.typicode.com/photos?_limit=10";
    const response = await fetch(endPoint);
    const data = await response.json();
    this.setState({ items: data });
  };

  _renderItem = ({ item, index }) => {
    let { cardText, card, cardImage } = style;
    return (
      <TouchableOpacity style={card}>
        <Image
          style={cardImage}
          source={{
            uri: "https://images.unsplash.com/photo-1631631480669-535cc43f2327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          }}
        />
        <Text style={cardText}>{item.title} </Text>
      </TouchableOpacity>
    );
  };

  render() {
    let { container, loader } = style;
    let { items } = this.state;
    if (items.length === 0) {
      return (
        <View style={loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <FlatList
        style={container}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
      />
    );
  }
}

const style = StyleSheet.create({
  container: {
    // flex: 1,
    // alighItems: 'center',
    // justifyContent: 'center'
    marginTop: 40,
  },
  cardText: {
    fontSize: 16,
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
