import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useHistory } from "react-router-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Menu, IconButton } from "react-native-paper";

const options = {
  timeZone: "UTC",
  weekday: "long",
  month: "short",
  day: "numeric"
};
function getDayString(date) {
  return new Date(date).toLocaleDateString(undefined, options);
}

export default function Moment({ moment, showDate = false }) {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const { id, date, activities, people, places } = moment;
  function onEdit() {
    setMomentToEdit(moment);
    history.push(`/edit/${id}`);
  }
  const onDelete = () => console.log("deleet me plz");
  return (
    <View style={styles.container}>
      <View>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="dots-vertical"
              size={20}
              onPress={openMenu}
              style={styles.menuToggle}
            >
              Show menu
            </IconButton>
          }
        >
          <Menu.Item onPress={onEdit} title="Edit" />
          <Menu.Item onPress={onDelete} title="Delete" />
        </Menu>
      </View>
      <View>
        {showDate && (
          <View style={styles.row}>
            <Icon style={styles.rowIcon} name="calendar" size={24} />
            <Text style={styles.rowText}>{getDayString(date)}</Text>
          </View>
        )}
        {people.length > 0 && (
          <View style={styles.row}>
            <Icon style={styles.rowIcon} name="account-multiple" size={24} />
            <Text style={styles.rowText}>{people.join(", ")}</Text>
          </View>
        )}
        {places.length > 0 && (
          <View style={styles.row}>
            <Icon style={styles.rowIcon} name="map-marker" size={24} />
            <Text style={styles.rowText}>{places.join(", ")}</Text>
          </View>
        )}
        {activities.length > 0 && (
          <View style={styles.row}>
            <Icon style={styles.rowIcon} name="tag" size={24} />
            <Text style={styles.rowText}>{activities.join(", ")}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: "16px 36px 8px 16px",
    margin: 0,
    // borderRadius: "0.25rem",
    backgroundColor: "#fff"
    // border: "1px solid rgba(0, 0, 0, 0.1)",
    // boxShadow:
    //   "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)"
  },
  menuToggle: {
    margin: 1
  },
  row: {
    // flex: 1,
    // flexDirection: "row"
  },
  rowIcon: {},
  rowText: {}
});
