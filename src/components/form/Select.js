import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Chip, TextInput } from "react-native-paper";
import Suggestions from "./Suggestions";

const makeLowerCase = arr => arr.map(i => i.toLowerCase());

export default function Select({ placeholder, allOptions, values, setValues }) {
  const [value, setValue] = useState("");
  const [options, setOptions] = useState(makeLowerCase(allOptions));
  function selectOption(option) {
    if (option.startsWith('Create "')) {
      const newItem = option.slice(8, -1);
      if (!values.includes(newItem)) {
        setValues([...values, newItem]);
      }
    } else {
      setValues([...values, option]);
      const lowerCaseOption = option.toLowerCase();
      setOptions([...options].filter(o => o !== lowerCaseOption));
    }
    setValue("");
  }
  function removeValue(index) {
    const item = values[index];
    setOptions([...options, item.toLowerCase()]);
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  }
  return (
    <View style={styles.container}>
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
        label={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
      />
      <Suggestions
        input={value}
        values={makeLowerCase(values)}
        options={options}
        selectOption={selectOption}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
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

/*
style={styles.input}
multiline={false}
blurOnSubmit
enablesReturnKeyAutomatically
maxLength={120}
onSubmitEditing={onSubmitEditing}
onKeyPress={onKeyPress}
returnKeyType="done"
*/
