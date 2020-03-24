import React, { useState } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import SelectModal from "./SelectModal";
import { monthOptions, prevMonthBound } from "../../utils";

export default function MonthPicker({ updateMonth }) {
  const [show, setShow] = useState(false);
  const [monthIndex, setMonthIndex] = useState(0);
  function onSelect(value, index) {
    setMonthIndex(index);
    updateMonth(value);
    close();
  }
  function goToPrevMonth() {
    const newMonthIndex = monthIndex + 1;
    setMonthIndex(newMonthIndex);
    const newMonth = monthOptions[newMonthIndex].value;
    updateMonth(newMonth);
  }
  function goToNextMonth() {
    const newMonthIndex = monthIndex - 1;
    setMonthIndex(newMonthIndex);
    const newMonth = monthOptions[newMonthIndex].value;
    updateMonth(newMonth);
  }
  const open = () => setShow(true);
  const close = () => setShow(false);
  return (
    <View style={styles.container}>
      <IconButton
        icon="chevron-left"
        size={24}
        onPress={goToPrevMonth}
        disabled={monthIndex === prevMonthBound}
      />
      <View style={styles.pickerContainer}>
        <SelectModal
          show={show}
          close={close}
          options={monthOptions}
          onSelect={onSelect}
        />
        <TouchableHighlight
          style={styles.opener}
          onPress={open}
          underlayColor="#0000000d"
        >
          <Text style={styles.text}>{monthOptions[monthIndex].label}</Text>
        </TouchableHighlight>
      </View>
      <IconButton
        style={styles.iconButton}
        icon="chevron-right"
        size={24}
        onPress={goToNextMonth}
        disabled={monthIndex === 0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16
  },
  pickerContainer: {
    marginLeft: 8,
    marginRight: 8,
    width: 120
  },
  opener: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    padding: 6
  },
  text: {
    fontSize: 16,
    textAlign: "center"
  }
});
