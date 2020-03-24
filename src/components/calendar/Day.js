import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Moment from "../Moment";
import { Divider } from "react-native-paper";
import { getDayStringLong } from "../../utils";

export default function Day({ day, moments }) {
  return (
    <View style={styles.container}>
      <Divider style={styles.divider} />
      <View style={styles.dayTitleContainer}>
        <Text style={styles.dayTitle}>{getDayStringLong(day)}</Text>
      </View>
      {moments.map(m => (
        <Moment key={m.id} moment={m} showDate={false} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    marginBottom: 24
  },
  dayTitleContainer: {
    marginTop: -14,
    paddingHorizontal: 10,
    alignSelf: "center",
    backgroundColor: "#f8f8f8",
    height: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  dayTitle: {
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center"
  },
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
});
