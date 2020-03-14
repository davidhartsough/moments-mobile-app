import React from "react";
import { useHistory } from "react-router-native";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

export default function ActionButton() {
  const history = useHistory();
  const goToNew = () => history.push("/new");
  return <FAB style={styles.fab} label="New" icon="plus" onPress={goToNew} />;
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center"
  }
});
