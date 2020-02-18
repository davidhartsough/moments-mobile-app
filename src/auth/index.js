import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SafeAreaView, Text, Button, View } from "react-native";
import { Appbar } from "react-native-paper";
import { logIn, fetchAuth } from "../store/actions/auth";
import ScreenLoader from "../components/ScreenLoader";

function Authenticator({ auth, handleClick, getAuth, children }) {
  useEffect(() => {
    getAuth();
  }, [getAuth]);
  if (auth.loading) return <ScreenLoader />;
  if (auth.isLoggedIn) return children;
  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title="Sign In" />
      </Appbar.Header>
      <SafeAreaView>
        <Button title="Sign in" onPress={handleClick} />
      </SafeAreaView>
    </View>
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
