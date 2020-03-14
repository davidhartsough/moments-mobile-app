import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ScreenLoader from "../ScreenLoader";
import MomentsByDay from "./MomentsByDay";

export default function List({ moments }) {
  if (moments.loading) {
    return (
      <View style={styles.loader}>
        <ScreenLoader />
      </View>
    );
  }
  if (moments.momentsByMonth.length < 1) {
    return <Text style={styles.empty}>No moments found for this month.</Text>;
  }
  return <MomentsByDay moments={moments.momentsByMonth} />;
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    paddingTop: 96
  },
  empty: {
    textAlign: "center",
    fontSize: 16
  }
});
