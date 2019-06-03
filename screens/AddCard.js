import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Platform
} from 'react-native';
import { addCardToDeck } from '../utils/api';
import { white, purple } from '../utils/colors';

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={
        Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn
      }
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}

class AddCard extends Component {
  state = {
    question: '',
    answer: '',
    deck: { ...this.props.navigation.getParam('deck') }
  };
  toDeck = deck => {
    this.props.navigation.navigate('ListDeck', {
      deck: deck
    });
  };

  submit = () => {
    const { question, answer } = this.state;
    const title = this.state.deck.title;
    const deck = {
      ...this.state.deck,
      questions: [...this.state.deck.questions, { question, answer }]
    };
    this.setState({ deck: deck });

    addCardToDeck(title, deck)
      .then(() => {
        return this.toDeck(deck);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { question, answer } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {this.state.title}</Text>
        <View>
          <TextInput
            placeholder="Question"
            style={styles.input}
            value={question}
            onChangeText={question => this.setState({ question })}
          />
          <TextInput
            placeholder="Answer"
            style={styles.input}
            value={answer}
            onChangeText={answer => this.setState({ answer })}
          />
          <SubmitBtn onPress={this.submit} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 0,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  }
});

export default AddCard;
