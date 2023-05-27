import express from 'express';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const app = express();

const firebaseConfig = {
  apiKey: "AIzaSyA1bj7tx52GPJO8Qo1XpkEXY7E1E69dCHU",
  authDomain: "promptbase-85650.firebaseapp.com",
  databaseURL: "https://promptbase-85650-default-rtdb.firebaseio.com",
  projectId: "promptbase-85650",
  storageBucket: "promptbase-85650.appspot.com",
  messagingSenderId: "859520305437",
  appId: "1:859520305437:web:c6ab75e3f7ab4962df39f4",
  measurementId: "G-TJWLEQ3DHX"
};

const appData = initializeApp(firebaseConfig);
const database = getDatabase(appData);


app.get('/api', (req, res) => {
  const dataInfo = ref(database);
  onValue(dataInfo, (snapshot) => {
    const data = snapshot.val();
    res.json(data)
  });
});

app.listen(3005, ()=> {
  console.log("App is running on port 3005")
})