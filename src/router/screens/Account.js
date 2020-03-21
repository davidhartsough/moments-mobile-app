import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/auth";
import HeaderWithBack from "../../components/HeaderWithBack";

function Account({ name, email, onPress }) {
  return (
    <>
      <HeaderWithBack title="Account" />
      <View style={styles.container}>
        <Text style={styles.text}>You are currently signed in as:</Text>
        <Text style={styles.name}>{name ? `The Amazing ${name}` : email}</Text>
        <Button
          mode="outlined"
          onPress={onPress}
          style={styles.button}
          color="#111"
          labelStyle={styles.buttonLabel}
        >
          Sign out
        </Button>
      </View>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(signOut())
});

export default connect(
  ({ profile: { name, email } }) => ({ name, email }),
  mapDispatchToProps
)(Account);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    margin: 8
  },
  name: {
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 28
  },
  button: {
    width: 144,
    alignSelf: "center"
  },
  buttonLabel: {
    fontSize: 16
  }
});
