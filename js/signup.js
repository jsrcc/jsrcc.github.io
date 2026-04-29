import { auth, db } from './firebase.js';
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import { ref, set, getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const signupForm = document.querySelector('form');
const errorElement = document.getElementById('error');

function writeUserData(userId, name, email, fname) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    fullname: fname,
    email: email
  })
  .then(() => {
    console.log("Data saved successfully!");
  })
  .catch((error) => {
    console.error("Write failed:", error);
  });
}

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('usrName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fname = document.getElementById('fname').value;

    createUserWithEmailAndPassword(auth, email, password, fname)
    .then((userCredential) => {

        const user = userCredential.user;
        const userId = userCredential.user.uid;
        console.log("Success:", user.uid);
        writeUserData(userId, username, email, fname);
        const successMessage = document.getElementById("accinfo");
        successMessage.style.display = "flex";
    })
    .catch((error) => {
        console.error("Error code:", error.code);
        console.error("Error message:", error.message);
    });
    
});