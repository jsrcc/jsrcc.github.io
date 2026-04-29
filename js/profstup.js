import { db } from './firebase.js'; 
import { getDatabase, ref, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('uid');

const profileForm = document.querySelector('form');
const errorElement = document.getElementById('error');

profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!userId) {
        errorElement.innerText = "Error: No User ID found.";
        return;
    }

    const username = document.getElementById('usrName').value;
    const realName = document.getElementById('realName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;

    if (age < 12 || age > 25) {
        errorElement.innerText = "Age must be between 12 and 25.";
        return;
    }

    const profileData = {
        username: username,
        realName: realName,
        age: parseInt(age),
        gender: gender,
        profileSetupComplete: true,
        updatedAt: new Date().toISOString()
    };

    const dbRef = ref(getDatabase(), 'users/' + userId);

    update(dbRef, profileData)
        .then(() => {
            window.location.href = "main.html"; 
        })
        .catch((error) => {
            errorElement.innerText = "Failed to save profile: " + error.message;
        });
});