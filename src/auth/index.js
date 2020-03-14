import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import { Appbar, Button } from "react-native-paper";
import { logIn, fetchAuth } from "../store/actions/auth";
import ScreenLoader from "../components/ScreenLoader";

function Authenticator({ auth, handleClick, getAuth, children }) {
  useEffect(() => {
    getAuth();
  }, [getAuth]);
  if (auth.loading) return <ScreenLoader />;
  if (auth.isLoggedIn) return children;
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Sign In" />
      </Appbar.Header>
      <SafeAreaView>
        <Button mode="contained" onPress={handleClick} style={styles.button}>
          Sign in
        </Button>
      </SafeAreaView>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(logIn()),
  getAuth: () => dispatch(fetchAuth())
});

export default connect(
  ({ auth }) => ({ auth }),
  mapDispatchToProps
)(Authenticator);

const styles = StyleSheet.create({
  button: {
    margin: 64
  }
});
