import React, { useState, useEffect } from "react";
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
  const [data, setData] = useState([]);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  useEffect(() => {
    if (input.length) {
      let newData = [];
      let alreadyAdded = false;
      const upperCaseInput = input.toUpperCase();
      const filtered = options.filter(
        i => i.toUpperCase().includes(upperCaseInput) && !values.includes(i)
      );
      if (filtered.length) {
        newData = filtered;
        // newData = [...new Set(filtered)];
      } else {
        const index = values.findIndex(v => v.toUpperCase() === upperCaseInput);
        if (index >= 0) {
          alreadyAdded = values[index];
        }
      }
      if (input.length > 1) {
        newData.push(`Create "${input}"`);
      }
      setData(newData);
      setAlreadyAdded(alreadyAdded);
    } else {
      setAlreadyAdded(false);
      setData([]);
    }
  }, [input, values, options, setData, setAlreadyAdded]);
  if (alreadyAdded) {
    return (
      <HelperText style={styles.notice}>
        "{alreadyAdded}" already added
      </HelperText>
    );
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
