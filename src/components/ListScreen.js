import React from "react";
import { View, StyleSheet } from "react-native";
import TabViewHeader from "./TabViewHeader";
import List from "./List";
import ScreenLoader from "./ScreenLoader";

export default function ListScreen({ title, type, items, loading }) {
  const plural = title.toLowerCase();
  const singular = type.toLowerCase();
  return (
    <View style={styles.container}>
      <TabViewHeader title={title} />
      {loading ? (
        <ScreenLoader />
      ) : (
        <View>
          {items.length > 0 ? (
            <List
              singular={singular}
              type={type}
              plural={plural}
              items={items}
            />
          ) : (
            <Text>
              No {plural} here yet. Add moments with {plural} to see them here.
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
