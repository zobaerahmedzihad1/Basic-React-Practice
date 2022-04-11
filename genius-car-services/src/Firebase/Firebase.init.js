import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbbQDToeBHohQ04b_7gXRL3Avvh_ZnKZk",
  authDomain: "genius-car-service90.firebaseapp.com",
  projectId: "genius-car-service90",
  storageBucket: "genius-car-service90.appspot.com",
  messagingSenderId: "354719740717",
  appId: "1:354719740717:web:180285f3152b8e4eaf99a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
