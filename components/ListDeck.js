import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
class ListDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params;
    console.log('deck', deck);
    return {
      title: deck.title,
      questions: deck.questions
    };
  };
  render() {
    const { title, questions } = this.props.navigation.state.params.deck;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>List Deck -{title}</Text>

        {questions.map((question, index) => (
          <Card
            key={index}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </View>
    );
  }
}
export default ListDeck;
