import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC1A1OnyJM06xAyRpjMwBK4sIxl6PaJS9I",
    authDomain: "apptokenkey.firebaseapp.com",
    databaseURL: "https://apptokenkey.firebaseio.com",
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;