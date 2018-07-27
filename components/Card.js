import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function Card({ question, answer }) {
  return (
    <View style={{ flex: 1 }}>
      <Text> {question}</Text>
      <Text> {answer}</Text>
    </View>
  );
}
