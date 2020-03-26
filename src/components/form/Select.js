import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { Chip, TextInput } from "react-native-paper";
import Suggestions from "./Suggestions";

export default function Select({ placeholder, allOptions, values, setValues }) {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState(allOptions);
  function selectOption(option) {
    if (option.startsWith('Create "')) {
      const newItem = option.slice(8, -1).trim();
      if (!values.includes(newItem)) {
        setValues([...values, newItem]);
      }
    } else {
      setValues([...values, option]);
      const lowerCaseOption = option.toLowerCase();
      setOptions([...options].filter(o => o.toLowerCase() !== lowerCaseOption));
    }
    setValue("");
  }
  function removeValue(index) {
    const item = values[index];
    if (allOptions.includes(item) && !options.includes(item)) {
      setOptions([...options, item]);
    }
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  }
  return (
    <SafeAreaView style={styles.container}>
      {values.length > 0 && (
        <View style={styles.chips}>
          {values.map((v, index) => (
            <Chip
              key={`${v}-${index}`}
              style={styles.chip}
              onClose={() => removeValue(index)}
            >
              {v}
            </Chip>
          ))}
        </View>
      )}
      <TextInput
        autoFocus
        label={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
      <Suggestions
        input={value}
        values={values}
        options={options}
        selectOption={selectOption}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb"
  },
  chip: {
    marginRight: 6,
    marginBottom: 6
  },
  input: {
    backgroundColor: "#f0f0f0"
  }
});
