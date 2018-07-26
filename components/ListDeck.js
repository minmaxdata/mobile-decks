import React, { Component } from "react";
import { View, Text } from "react-native";

class ListDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;

    return {
      id: deckId
    };
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>List Deck</Text>
      </View>
    );
  }
}
export default ListDeck;
