import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SafeAreaView, StyleSheet } from "react-native";
import { Appbar, Button, Divider } from "react-native-paper";
import { handleAuth } from "../store/actions/auth";
import ScreenLoader from "../components/ScreenLoader";
import EmailForm from "./EmailForm";
import {
  handleAuthState,
  trySignInWithGoogle,
  trySignInWithFacebook,
  initAuth,
  createUser,
  emailSignIn
} from "../store/db/auth";

initAuth();

const AuthButton = ({ icon, color, onPress, children }) => (
  <Button
    mode="contained"
    onPress={onPress}
    style={styles.button}
    contentStyle={styles.buttonContent}
    labelStyle={styles.buttonLabel}
    icon={icon}
    uppercase={false}
    color={color}
  >
    {children}
  </Button>
);

function Authenticator({ auth, _handleAuth, children }) {
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const openSignIn = () => setSignInVisible(true);
  const closeSignIn = () => setSignInVisible(false);
  const openSignUp = () => setSignUpVisible(true);
  const closeSignUp = () => setSignUpVisible(false);
  useEffect(() => {
    handleAuthState(_handleAuth);
  }, [_handleAuth]);
  useEffect(() => {
    if (auth.isLoggedIn && !auth.loading) {
      closeSignIn();
      closeSignUp();
    }
  }, [auth]);
  if (auth.loading) return <ScreenLoader />;
  if (auth.isLoggedIn) return children;
  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Welcome" />
      </Appbar.Header>
      <SafeAreaView style={styles.view}>
        {/* <EmailSignIn visible={signInVisible} close={closeSignIn} /> */}
        <EmailForm
          visible={signInVisible}
          close={closeSignIn}
          type="In"
          action={emailSignIn}
        />
        <AuthButton onPress={openSignIn} icon="email">
          Sign in with email
        </AuthButton>
        <AuthButton onPress={trySignInWithGoogle} icon="google" color="#4185f3">
          Sign in with Google
        </AuthButton>
        <AuthButton
          onPress={trySignInWithFacebook}
          icon="facebook"
          color="#3a5998"
        >
          Sign in with Facebook
        </AuthButton>
        <Divider style={styles.divider} />
        {/* <EmailSignUp visible={signUpVisible} close={closeSignUp} /> */}
        <EmailForm
          visible={signUpVisible}
          close={closeSignUp}
          type="Up"
          action={createUser}
        />
        <AuthButton onPress={openSignUp} icon="account-plus" color="#03a9f4">
          Sign up with email
        </AuthButton>
      </SafeAreaView>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  _handleAuth: user => dispatch(handleAuth(user))
});

export default connect(
  ({ auth }) => ({ auth }),
  mapDispatchToProps
)(Authenticator);

const styles = StyleSheet.create({
  view: {
    padding: 16,
    marginBottom: 144,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: 10
  },
  buttonContent: {
    width: 256,
    padding: 4,
    justifyContent: "flex-start"
  },
  buttonLabel: {
    fontSize: 16,
    textAlign: "left",
    paddingLeft: 2
  },
  divider: {
    width: 256,
    margin: 5,
    backgroundColor: "#777"
  }
});
