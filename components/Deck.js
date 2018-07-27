import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';

export default function Deck({ item }) {
  const { title, questions } = item;
  return (
    <View style={styles.deck}>
      <Text>DECK: {JSON.stringify({ item })}</Text>
      <Text>DECK: {title}</Text>
      <Text>DECK: {questions.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
