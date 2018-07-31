import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import {
  getDailyReminderValue,
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers';
import { white, purple } from '../utils/colors';
import { getDecks, addDeck } from '../utils/api';
import TextButton from './TextButton';

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

class AddDeck extends Component {
  state = {
    title: ''
  };
  toDeck = deck => {
    this.props.navigation.navigate('ListDeck', {
      item: deck
    });
  };
  submit = () => {
    const { title } = this.state;
    const id = title.toLowerCase();
    const deck = {
      [id]: { title: title, questions: [] }
    };
    //this.props.navigation.navigate("Deck", { id });
    console.log('add decks', deck);

    addDeck(deck)
      .then(() => {
        return this.toDeck(deck);
      })
      .catch(err => {
        console.log(err);
      });
    // Navigate to deck view

    this.setState({ title: '' });

    // Clear local notification
  };
  render() {
    const { title } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text> What is the Title for your new FlashCard Deck?</Text>
        <TextInput
          placeholder="FlashCard Topic"
          style={styles.input}
          value={title}
          onChangeText={title => this.setState({ title })}
        />
        <SubmitBtn onPress={this.submit} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 44,
    padding: 0,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
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
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  }
});
export default AddDeck;
