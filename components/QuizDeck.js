import React, { Component } from "react";
import { View, Text } from "react-native";

class QuizDeck extends Component {
  state = {
    question: "",
    answer: "",
    uuid: ""
  };
  render() {
    return (
      <View>
        <Text>Quiz Deck</Text>
      </View>
    );
  }
}
export default QuizDeck;
