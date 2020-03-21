import React, { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { Appbar, TextInput, HelperText, FAB } from "react-native-paper";

export default function EmailForm({ visible, close, type, action }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  function submit() {
    if (email.length < 5 || password.length < 6) {
      return;
    }
    setLoading(true);
    action(email, password).catch(({ code, message }) => {
      switch (code) {
        case "auth/invalid-email":
          setEmailError("Please enter a valid email.");
          setPasswordError(false);
          break;
        case "auth/email-already-in-use":
          setEmailError("There is already an account with this email.");
          setPasswordError(false);
          break;
        case "auth/user-not-found":
          setEmailError("There is no account with this email.");
          setPasswordError(false);
          break;
        case "auth/weak-password":
          setPasswordError(message);
          setEmailError(false);
          break;
        case "auth/wrong-password":
          setPasswordError(
            "Incorrect password, or this account uses a social login."
          );
          setEmailError(false);
          break;
        default:
          setPasswordError("An error occurred. Please check your information.");
          setEmailError(false);
          break;
      }
      setLoading(false);
    });
  }
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <Appbar.Header>
        <Appbar.Content title={`Sign ${type}`} />
        <Appbar.Action onPress={close} icon="close" />
      </Appbar.Header>
      <TextInput
        autoFocus
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCompleteType="email"
        style={styles.input}
        keyboardType="email-address"
        returnKeyType="next"
        spellCheck={false}
        textContentType="emailAddress"
        error={emailError}
      />
      <HelperText type="error" visible={emailError} style={styles.error}>
        {emailError}
      </HelperText>
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCompleteType={type === "In" ? "password" : "off"}
        autoCorrect={false}
        style={styles.input}
        returnKeyType="done"
        secureTextEntry={true}
        spellCheck={false}
        textContentType="password"
        onSubmitEditing={submit}
        error={passwordError}
      />
      <HelperText type="error" visible={passwordError} style={styles.error}>
        {passwordError}
      </HelperText>
      <FAB
        label={`Sign ${type}`}
        icon={`account-${type === "In" ? "check" : "plus"}`}
        onPress={submit}
        disabled={email.length < 5 || password.length < 6}
        style={styles.fab}
        loading={loading}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 16,
    marginBottom: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  error: {
    fontSize: 14
  },
  fab: {
    marginTop: 16,
    alignSelf: "center",
    marginBottom: 80
  }
});
