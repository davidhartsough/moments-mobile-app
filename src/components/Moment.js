import React, { useState } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, Text } from "react-native";
import { useHistory } from "react-router-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Surface, Menu, IconButton } from "react-native-paper";
import { setMomentToEdit, deleteMoment } from "../store/actions/moments";
import { getDayString } from "../utils";

function Moment({ moment, showDate = false, _setMomentToEdit, _deleteMoment }) {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const { id, date, activities, people, places } = moment;
  function onEdit() {
    _setMomentToEdit(moment);
    history.push(`/edit/${id}`);
  }
  const onDelete = () => _deleteMoment(moment);
  return (
    <Surface style={styles.container}>
      <View style={styles.rows}>
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
      <View style={styles.menuContainer}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton icon="dots-vertical" size={20} onPress={openMenu} />
          }
        >
          <Menu.Item onPress={onEdit} title="Edit" />
          <Menu.Item onPress={onDelete} title="Delete" />
        </Menu>
      </View>
    </Surface>
  );
}

const mapDispatchToProps = dispatch => ({
  _setMomentToEdit: m => dispatch(setMomentToEdit(m)),
  _deleteMoment: m => dispatch(deleteMoment(m))
});

export default connect(null, mapDispatchToProps)(Moment);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 4,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderStyle: "solid",
    elevation: 2,
    flexDirection: "row"
  },
  menuContainer: {
    width: 32,
    height: 38,
    justifyContent: "center",
    alignItems: "center"
  },
  rows: {
    padding: 16,
    paddingRight: 2,
    paddingBottom: 8,
    flex: 1
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12
  },
  rowIcon: {
    height: 24
  },
  rowText: {
    marginLeft: 16,
    flex: 1,
    fontSize: 16
  }
});
