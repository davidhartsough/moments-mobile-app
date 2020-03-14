import React from "react";
import { FlatList, TouchableHighlight, Text, StyleSheet } from "react-native";
import { HelperText } from "react-native-paper";

function Item({ item, onPress }) {
  const handlePress = () => onPress(item);
  return (
    <TouchableHighlight
      style={styles.item}
      onPress={handlePress}
      underlayColor="#0000000d"
    >
      <Text style={styles.text}>{item}</Text>
    </TouchableHighlight>
  );
}

export default function Suggestions({ input, values, options, selectOption }) {
  let data = [];
  if (input.length) {
    const upperCaseInput = input.toUpperCase();
    const filtered = options.filter(i =>
      i.toUpperCase().includes(upperCaseInput)
    );
    if (filtered.length) {
      data = filtered;
    } else if (values.includes(input.toLowerCase())) {
      return (
        <HelperText style={styles.notice}>"{input}" already added</HelperText>
      );
    } else if (input.length > 1) {
      data = [`Create "${input}"`];
    }
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} onPress={selectOption} />}
      keyExtractor={i => i}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  },
  notice: {
    fontSize: 14
  },
  text: {
    fontSize: 16
  }
});
