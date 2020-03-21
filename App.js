import React from "react";
import { StyleSheet, View } from "react-native";
import Index from "./src";

console.log("Heyyy dude");

export default function App() {
  return (
    <View style={styles.container}>
      <Index />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
