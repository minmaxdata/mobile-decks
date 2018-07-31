import React, { Component } from 'react';
import { View, Text } from 'react-native';

class QuizDeck extends Component {
  state = {
    question: '',
    answer: ''
  };
  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <View>
        <Text>Quiz Deck- {JSON.stringify(item)}</Text>
      </View>
    );
  }
}
export default QuizDeck;
