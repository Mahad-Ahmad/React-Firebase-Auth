import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2rgd5WdcbFwn1L7VgwWJ3yVKrfkAaiZs",
  authDomain: "auth-development-209c5.firebaseapp.com",
  projectId: "auth-development-209c5",
  storageBucket: "auth-development-209c5.appspot.com",
  messagingSenderId: "624787887273",
  appId: "1:624787887273:web:380f54a53af088075f45b8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
