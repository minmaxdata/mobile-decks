import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Alert
} from 'react-native';
import Deck from './Deck';
import { white, purple, gray } from '../utils/colors';

addCard = () => {};
class ListDeck extends Component {
  render() {
    const { deck } = this.props.navigation.state.params;
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length}</Text>

        <TouchableOpacity
          style={
            Platform.OS === 'ios'
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn
          }
          onPress={() =>
            this.props.navigation.navigate('AddCard', { deck: deck })
          }>
          <Text style={styles.submitBtnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            Platform.OS === 'ios'
              ? styles.iosSubmitBtn
              : styles.AndroidSubmitBtn
          }
          onPress={() =>
            this.props.navigation.navigate('QuizDeck', { deck: deck })
          }>
          <Text style={styles.submitBtnText}>Quiz Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    padding: 15
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
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
  }
});

export default ListDeck;
