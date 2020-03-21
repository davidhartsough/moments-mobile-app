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

// export function googlePopUp() {
//   return auth()
//     .signInWithPopup(providers.google)
//     .then(console.log)
//     .catch(console.log);
// }

// export function googleRedirect() {
//   return auth().signInWithRedirect(providers.google);
// }

// export function handleRedirect() {
//   return auth()
//     .getRedirectResult()
//     .then(console.log)
//     .catch(console.warn);
// }

// export function handleFacebookSignIn({ accessToken }) {
//   console.log("accessToken");
//   console.log(accessToken);
//   return auth()
//     .signInWithCredential(providers.facebook.credential(accessToken))
//     .catch(console.warn);
// }

export function trySignInWithFacebook() {
  Facebook.logInWithReadPermissionsAsync()
    .then(result => {
      const { type, token } = result;
      if (type === "success") {
        handleFacebookSignIn(token);
      }
    })
    .catch(console.log);
}

function handleFacebookSignIn(token) {
  return auth()
    .signInWithCredential(providers.facebook.credential(token))
    .catch(console.warn);
}

export function trySignInWithGoogle() {
  Google.logInAsync(config.google)
    .then(result => {
      const { type, accessToken, idToken } = result;
      if (type === "success") {
        handleGoogleSignIn(idToken, accessToken);
      }
    })
    .catch(() => {});
}

function handleGoogleSignIn(idToken, accessToken) {
  return auth()
    .signInWithCredential(providers.google.credential(idToken, accessToken))
    .catch(console.warn);
}

export function fetchAuth() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(false), 444);
  });
}

export function logIn() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(), 444);
  });
}

export function logOut() {
  return auth().signOut();
}

/*
function doThing() {
  Expo.Google.logInAsync({
    androidClientId: "YOUR_ANDROID_CLIENT_ID",
    iosClientId: "YOUR_iOS_CLIENT_ID",
    scopes: ["profile", "email"]
  }).then(result => {
    if (result.type === "success") {
      const { idToken, accessToken } = result;
      // HANDLE GOOGLE SIGN IN
    }
  });
}
*/
/*
function loginWithFacebook() {
  Facebook.initializeAsync(
     '<FACEBOOK_APP_ID>',
  ).then(() => {
    Facebook.logInWithReadPermissionsAsync(
      { permissions: ['public_profile'] }
    ).then(result => {
      console.log(result);
      // const {type, token} = result;
      if (result.type === "success") {
        // HANDLE FACEBOOK SIGN IN (result.token)
      }
    });
  });
}
*/

// GoogleSignin.hasPlayServices().then(() => {
//   GoogleSignin.signIn()
//     .then(handleGoogleSignIn)
//     .catch(console.warn);
// });

// LoginManager.logInWithPermissions().then(result => {
//   console.log("result");
//   console.log(result);
//   if (result.isCancelled) return;
//   AccessToken.getCurrentAccessToken().then(data => {
//     console.log("data");
//     console.log(data);
//     if (!data) return;
//     handleFacebookSignIn(data);
//   });
// });
