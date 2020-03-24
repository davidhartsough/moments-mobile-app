import { auth, providers } from "./fb";
import config from "./config";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";

export function initAuth() {
  const facebookAppId = "524014968446692";
  Facebook.initializeAsync(facebookAppId);
}

export function handleAuthState(handler) {
  return auth().onAuthStateChanged(handler);
}

export function emailSignIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function createUser(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function trySignInWithFacebook() {
  return new Promise(resolve => {
    Facebook.logInWithReadPermissionsAsync()
      .then(result => {
        const { type, token } = result;
        if (type === "success") {
          handleFacebookSignIn(token).then(() => resolve(type));
        } else {
          return resolve(type);
        }
      })
      .catch(() => resolve("failure"));
  });
}

function handleFacebookSignIn(token) {
  return auth()
    .signInWithCredential(providers.facebook.credential(token))
    .catch(console.warn);
}

export function trySignInWithGoogle() {
  return new Promise(resolve => {
    Google.logInAsync(config.google)
      .then(result => {
        const { type, accessToken, idToken } = result;
        if (type === "success") {
          handleGoogleSignIn(idToken, accessToken).then(() => resolve(type));
        } else {
          return resolve(type);
        }
      })
      .catch(() => resolve("failure"));
  });
}

function handleGoogleSignIn(idToken, accessToken) {
  return auth()
    .signInWithCredential(providers.google.credential(idToken, accessToken))
    .catch(console.warn);
}

export function logOut() {
  return auth().signOut();
}
