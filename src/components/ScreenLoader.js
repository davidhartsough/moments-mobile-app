import React from "react";
import { ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";

export default function ScreenLoader() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color="#1471eb" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
