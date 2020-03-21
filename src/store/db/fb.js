import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "./config";

let db = null;
let dbauth = null;

export function initDatabase() {
  if (firebase.apps.length === 0) firebase.initializeApp(config.fb);
  db = firebase.firestore();
  dbauth = firebase.auth();
}

export const database = () => db;

export const auth = () => dbauth;

export const providers = {
  google: firebase.auth.GoogleAuthProvider,
  facebook: firebase.auth.FacebookAuthProvider
  // google: new firebase.auth.GoogleAuthProvider(),
  // facebook: new firebase.auth.FacebookAuthProvider()
};
