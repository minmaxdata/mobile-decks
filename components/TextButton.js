import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { white, purple } from "../utils/colors";

export default function TextButton({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  reset: {
    textAlign: "center",
    color: purple
  }
});
