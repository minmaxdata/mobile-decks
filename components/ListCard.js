import React, { Component } from "react";
import { View, Text } from "react-native";

class ListCard extends Component {
  state = {
    question: "",
    answer: "",
    uuid: ""
  };
  render() {
    return (
      <View>
        <Text>List Card</Text>
      </View>
    );
  }
}
export default AddCard;
