import React, { useState } from "react";
import {
  View,
  Modal,
  TouchableHighlight,
  Text,
  StyleSheet
} from "react-native";
import { Appbar, Chip } from "react-native-paper";
import Label from "./Label";
import Select from "./Select";

export default function FormItem({ label, icon, options, values, setValues }) {
  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);
  const placeholder = `Add ${label}`;
  return (
    <View style={styles.container}>
      <Label text={label} icon={icon} />
      <Modal animationType="slide" transparent={false} visible={visible}>
        <Appbar.Header>
          <Appbar.Content title={placeholder} />
          <Appbar.Action onPress={close} icon="check" />
        </Appbar.Header>
        <Select
          placeholder={placeholder}
          allOptions={options}
          values={values}
          setValues={setValues}
        />
      </Modal>
      <TouchableHighlight
        style={styles.opener}
        onPress={open}
        underlayColor="#0000000d"
      >
        {values.length === 0 ? (
          <Text style={styles.placeholder}>{placeholder}</Text>
        ) : (
          <View style={styles.chips}>
            {values.map(v => (
              <Chip key={v} style={styles.chip}>
                {v}
              </Chip>
            ))}
          </View>
        )}
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#fff"
  },
  opener: {
    marginTop: 4,
    marginBottom: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 2
    // backgroundColor: "#fff"
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap"
    // backgroundColor: "#fff"
  },
  chip: {
    marginRight: 6,
    marginBottom: 6
  },
  placeholder: {
    fontSize: 16,
    color: "#666",
    padding: 4,
    paddingBottom: 10
  }
});
