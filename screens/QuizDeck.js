import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  white,
  purple,
  lightPurp,
  lightYellow,
  lightGray
} from '../utils/colors';

class QuizDeck extends Component {
  state = {
    score: 0,
    index: 0,
    showAnswer: false
  };
  correctButton = () => {
    this.setState(state => ({
      index: state.index + 1,
      showAnswer: false,
      score: state.score + 1
    }));
  };
  incorrectButton = () => {
    this.setState(state => ({
      index: state.index + 1,
      showAnswer: false
    }));
  };
  showAnswerSide = () => {
    this.setState(state => ({
      showAnswer: !state.showAnswer
    }));
  };

  RepeatQuiz = () => {
    this.setState(state => ({
      index: 0,
      score: 0,
      showAnswer: false
    }));
  };

  toDeck = () => {
    this.props.navigation.goBack();
  };
  render() {
    const { index, showAnswer, score } = this.state;
    const { title, questions } = this.props.navigation.state.params.deck;
    const deckEnd = index < questions.length;
    console.log('index', index);
    return (
      <View style={{ flex: 1 }}>
        {deckEnd ? (
          <View style={styles.container}>
            <View
              style={[
                styles.row,
                { alignItems: 'flex-start', backgroundColor: lightGray }
              ]}>
              <Text style={{ flex: 1, fontSize: 16 }}>{`${index + 1}/${
                questions.length
                }`}</Text>
              <Text style={{ flex: 4, fontSize: 24 }}> Quiz on {title}</Text>
            </View>
            <View style={styles.content}>
              {!showAnswer ? (
                <Text style={styles.contentText}>
                  {questions[index].question}
                </Text>
              ) : (
                  <Text style={styles.contentText}>
                    {questions[index].answer}
                  </Text>
                )}
            </View>
            <View>
              <TouchableOpacity
                onPress={this.correctButton}
                style={styles.iosBtn}>
                <Text style={styles.btnText}>Correct</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.incorrectButton}
                style={styles.iosBtn}>
                <Text style={styles.btnText}>Incorrect</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.showAnswerSide}
                style={styles.iosBtn}>
                <Text style={styles.btnText}>
                  Show {!showAnswer ? 'Answer' : 'Question'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
            <View style={styles.container}>
              <Text style={styles.title}>
                Your score: {score} of {questions.length}
              </Text>
              <TouchableOpacity style={styles.iosBtn} onPress={this.RepeatQuiz}>
                <Text style={styles.btnText}> Repeat Quiz </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iosBtn} onPress={this.toDeck}>
                <Text style={styles.btnText}> Return to Flashcard Deck </Text>
              </TouchableOpacity>
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  },
  iosBtn: {
    backgroundColor: lightPurp,
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 7,
    backgroundColor: lightYellow,
    padding: 20,
    height: 275
  },
  contentText: {
    justifyContent: 'center',
    color: purple,
    fontSize: 24,
    padding: 10
  }
});
export default QuizDeck;
