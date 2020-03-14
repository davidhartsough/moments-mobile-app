import React, { useState } from "react";
import {
  TouchableHighlight,
  View,
  Text,
  Modal,
  StyleSheet,
  Platform
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Appbar } from "react-native-paper";
import { formatDate } from "../../utils";

const options = {
  weekday: "long",
  month: "short",
  day: "numeric"
};
const today = new Date();
const minDate = new Date(1950, 2, 2);

function IosDatePicker({ initialDate, show, close, changeDate }) {
  const [date, setDate] = useState(initialDate);
  const onChange = (_, newDate) => setDate(newDate);
  function save() {
    changeDate(date);
    close();
  }
  return (
    <Modal animationType="slide" transparent={false} visible={show}>
      <Appbar.Header>
        <Appbar.Content title="Choose a date" />
        <Appbar.Action onPress={save} icon="check" />
      </Appbar.Header>
      <View>
        <DateTimePicker
          value={date}
          onChange={onChange}
          maximumDate={today}
          minimumDate={minDate}
        />
      </View>
    </Modal>
  );
}

function AndroidDatePicker({ date, changeDate }) {
  const onChange = (_, newDate) => changeDate(newDate || date);
  return (
    <DateTimePicker
      value={date}
      onChange={onChange}
      maximumDate={today}
      minimumDate={minDate}
    />
  );
}

export default function DatePicker({ date, setDate }) {
  const [show, setShow] = useState(false);
  const open = () => setShow(true);
  const close = () => setShow(false);
  function changeDate(newDate) {
    close();
    setDate(newDate);
  }
  const nDate = new Date(date);
  return (
    <View style={styles.view}>
      <TouchableHighlight onPress={open} underlayColor="#0000000d">
        <View style={styles.toggle}>
          <Text style={styles.text}>{formatDate(nDate)}</Text>
        </View>
      </TouchableHighlight>
      {Platform.OS === "ios" ? (
        <IosDatePicker
          initialDate={nDate}
          show={show}
          close={close}
          changeDate={changeDate}
        />
      ) : show ? (
        <AndroidDatePicker date={nDate} changeDate={changeDate} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginTop: 4,
    marginBottom: 20
  },
  toggle: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  text: {
    fontSize: 16
  }
});
