import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

export default function Label({ text, icon }) {
  return (
    <View style={styles.view}>
      <Icon style={styles.icon} name={icon} size={24} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 4,
    marginVertical: 4
  },
  icon: {
    height: 24
  },
  text: {
    marginLeft: 12,
    flex: 1,
    fontSize: 20,
    fontWeight: "200"
  }
});
