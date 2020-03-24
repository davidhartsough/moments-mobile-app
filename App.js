import React, { useState } from "react";
import { StyleSheet, View, YellowBox, Platform, StatusBar } from "react-native";
import { decode, encode } from "base-64";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Index from "./src";

// TODO: remove when errors are resolved by package updates
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}
// TODO: remove when errors are resolved by package updates
console.ignoredYellowBox = ["Setting a timer"];
YellowBox.ignoreWarnings(["Setting a timer"]);

async function loadAssetsAsync() {
  await Font.loadAsync(MaterialCommunityIcons.font);
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  if (loading) {
    return (
      <AppLoading
        startAsync={loadAssetsAsync}
        onFinish={onFinish}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
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
