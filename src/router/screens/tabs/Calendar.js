import React from "react";
import { useHistory } from "react-router-native";
import { Text, View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import TabViewHeader from "../../../components/TabViewHeader";

export default function Calendar() {
  const history = useHistory();
  const goToNew = () => history.push("/new");
  return (
    <View style={styles.container}>
      <TabViewHeader title="Moments" />
      <View style={styles.container}>
        <Text>Calendar</Text>
      </View>
      <FAB style={styles.fab} label="New" icon="plus" onPress={goToNew} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fab: {
    position: "absolute",
    margin: "auto",
    bottom: 16,
    alignSelf: "center"
  }
});
