import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Card() {
  const { item } = this.props.navigation.state.params;
  return (
    <View style={{ flex: 1 }}>
      <Text> CARD {JSON.stringify({ item })}</Text>
      <Text> {answer}</Text>
    </View>
  );
}
