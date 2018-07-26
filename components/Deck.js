import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { gray } from "../utils/colors";

export default function Deck({ title, questions }) {
  return (
    <View key={title} style={{ flex: 1 }}>
      <Text>{title}</Text>
      <Text>{questions.length}</Text>
    </View>
  );
}
