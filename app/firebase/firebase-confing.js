import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDM2ris6K89tKXpdvtWUwaH3k2h3l2Sdc0",
  authDomain: "crowdfunding-app-aa7db.firebaseapp.com",
  projectId: "crowdfunding-app-aa7db",
  storageBucket: "crowdfunding-app-aa7db.appspot.com",
  messagingSenderId: "82453571015",
  appId: "1:82453571015:web:9bae3f570615dcd16ca5e2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);