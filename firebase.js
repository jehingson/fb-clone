import firebase from 'firebase'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBRJZqazVyxKia4iMIPnebtz4dvowh6xps",
    authDomain: "login-a2c38.firebaseapp.com",
    projectId: "login-a2c38",
    storageBucket: "login-a2c38.appspot.com",
    messagingSenderId: "483132040660",
    appId: "1:483132040660:web:b90f9268816909bdebe241",
    measurementId: "G-ECZ795QS8P"
};

const app = !firebase.app.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage }