import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/auth";
import { fetchProfile } from "../../store/actions/profile";
import HeaderWithBack from "../../components/HeaderWithBack";
import Fetcher from "../../components/Fetcher";

function Account({ data, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are currently signed in as:</Text>
      <Text style={styles.name}>The Amazing {data.name}</Text>
      <Button
        mode="outlined"
        onPress={onPress}
        style={styles.button}
        color="#111"
        labelStyle={{ fontSize: 16 }}
      >
        Sign out
      </Button>
    </View>
  );
}

function AccountContainer(props) {
  return (
    <>
      <HeaderWithBack title="Account" />
      <Fetcher {...props}>
        <Account {...props} />
      </Fetcher>
    </>
  );
}

const mapStateToProps = ({ profile: { loading, data } }) => ({
  loading,
  data
});

const mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(logOut()),
  fetchData: () => dispatch(fetchProfile())
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);

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
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 24
  },
  button: {
    width: 144,
    alignSelf: "center"
  }
});
