import express from 'express';
import dotenv from 'dotenv';

import { initializeApp } from "firebase/app";
// import { getDatabase, ref, onValue } from "firebase/database";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const app = express();
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "promptbase-85650.firebaseapp.com",
  databaseURL: "https://promptbase-85650-default-rtdb.firebaseio.com",
  projectId: "promptbase-85650",
  storageBucket: "promptbase-85650.appspot.com",
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: "G-TJWLEQ3DHX"
};

const appData = initializeApp(firebaseConfig);
const database = getFirestore(appData);


app.get('/api/sales', async (req, res) => {
  
    const result = await getDoc(doc(database, "promptBrokerApi", "sales"));
    if(result.exists()) {
      res.json(result.data())
    } else {
      res.json("No data found")
    }

});
app.get('/api/users', async (req, res) => {
  
    const result = await getDoc(doc(database, "promptBrokerApi", "users"));
    if(result.exists()) {
      res.json(result.data())
    } else {
      res.json("No data found")
    }

});


app.listen(3005, () => {
  console.log("App is running on port 3005")
})