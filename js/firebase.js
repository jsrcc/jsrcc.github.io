
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyA8spDoZVlEbLa3vFkj7zKJiTzjLZ8JxCY",

    authDomain: "moody-e41b1.firebaseapp.com",

    databaseURL: "https://moody-e41b1-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "moody-e41b1",

    storageBucket: "moody-e41b1.firebasestorage.app",

    messagingSenderId: "867023611710",

    appId: "1:867023611710:web:7b4286b6928f729ee5ae6f"

  };

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const auth = getAuth(app);