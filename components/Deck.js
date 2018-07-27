import React from 'react';
import { View, Text } from 'react-native';

export default function Deck({ title, questions }) {
  return (
    <View key={title} style={{ flex: 1 }}>
      <Text>{title}</Text>
      <Text>{questions.length}</Text>
    </View>
  );
}
