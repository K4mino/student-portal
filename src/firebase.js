import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCJe95s8JYsiHjKMfnps3iec5O0qT7aUg0",
  authDomain: "chat-edb8d.firebaseapp.com",
  projectId: "chat-edb8d",
  storageBucket: "chat-edb8d.appspot.com",
  messagingSenderId: "846554297701",
  appId: "1:846554297701:web:637375c2b26268bc5b9d8c"
};

export const app = initializeApp(firebaseConfig);