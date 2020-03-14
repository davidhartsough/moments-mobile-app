import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Empty({ plural }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        No {plural} here yet. Add moments with {plural} to see them here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 16,
    padding: 16
  }
});
