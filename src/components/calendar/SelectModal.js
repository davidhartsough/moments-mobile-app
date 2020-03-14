import React from "react";
import {
  Modal,
  TouchableHighlight,
  Text,
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from "react-native";

export default function SelectModal({ show, close, options, onSelect }) {
  return (
    <Modal
      visible={show}
      onRequestClose={close}
      style={styles.modal}
      transparent={true}
      onDismiss={close}
    >
      <TouchableWithoutFeedback style={styles.backdrop} onPress={close}>
        <View style={styles.container}>
          <FlatList
            data={options}
            renderItem={({ item, index }) => (
              <TouchableHighlight
                style={styles.item}
                onPress={() => onSelect(item.value, index)}
                underlayColor="#0000000d"
              >
                <Text style={styles.text}>{item.label}</Text>
              </TouchableHighlight>
            )}
            keyExtractor={({ value }) => value}
            style={styles.list}
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000099"
  },
  backdrop: {
    flex: 1
    // padding: 80
  },
  list: {
    backgroundColor: "#fff",
    margin: 80,
    borderRadius: 4
  },
  item: {
    padding: 16
  },
  text: {
    fontSize: 16
  }
});
