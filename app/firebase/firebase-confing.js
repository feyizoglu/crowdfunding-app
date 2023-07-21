// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCxKJ0h4RrBE4J2MKgS8u1DyH3LzmhOEqg",
//   authDomain: "crownfunding-app.firebaseapp.com",
//   databaseURL: "https://crownfunding-app-default-rtdb.firebaseio.com",
//   projectId: "crownfunding-app",
//   storageBucket: "crownfunding-app.appspot.com",
//   messagingSenderId: "849371976837",
//   appId: "1:849371976837:web:05fc8e550c7f25a27985ec"
// };

// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);


import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBDWcCD2Ggtrn1ypqTIYHgRK-Nub8VDwN8",
  authDomain: "crowdfunding-app-9e2e9.firebaseapp.com",
  projectId: "crowdfunding-app-9e2e9",
  storageBucket: "crowdfunding-app-9e2e9.appspot.com",
  messagingSenderId: "1069798047382",
  appId: "1:1069798047382:web:bc6344ec47fd9f578d4cb7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);