import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBYWMEJKXyrj4wbg7X_fyFMVSi8zHaXL88",
  authDomain: "admin-dashboard-e34fb.firebaseapp.com",
  databaseURL: "https://admin-dashboard-e34fb-default-rtdb.firebaseio.com",
  projectId: "admin-dashboard-e34fb",
  storageBucket: "admin-dashboard-e34fb.appspot.com",
  messagingSenderId: "555651088742",
  appId: "1:555651088742:web:2229e6684073e9e4df48a7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)