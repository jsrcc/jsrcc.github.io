import { getCookie, appName } from './utils.js';
import { auth, db } from './firebase.js';
import { ref, set, get, getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const uid = getCookie('uid');
const memberRef = ref(db, `users/${uid}`); 

get(memberRef).then((snapshot) => {
  if (snapshot.exists()) {
    const userData = snapshot.val();
    document.querySelector('.highlight').textContent = userData.username;
    document.querySelector('.name-id').textContent = "Name: "+userData.fullname;
    document.querySelector('.email-id').textContent = "Email: "+userData.email;
  }
});

const eventRef = ref(db, `events/`);
const gridContainer = document.querySelector('#events .grid');

get(eventRef).then((snapshot) => {
    if (snapshot.exists()) {
        const eventsArray = [];
        
        snapshot.forEach((childSnapshot) => {
            eventsArray.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        const htmlMarkup = eventsArray.map(event => `
            <div class="card" data-id="${event.id}">
                <h3>${event.title}</h3>
                <p>
                    ${event.date}<br>
                    Topic: ${event.content}
                </p>
            </div>
        `).join('');

        gridContainer.innerHTML = htmlMarkup;

    } else {
        gridContainer.innerHTML = '<p>No upcoming events.</p>';
    }
}).catch((error) => {
    console.error("Error fetching events:", error);
});

const userUid = getCookie('uid');

if (userUid) {
    new QRCode(document.getElementById("qrcode-container"), {
        text: userUid, 
        width: 140,   
        height: 140,   
        colorDark : "#0a0a0a", // Dark grey/black for the dots
        colorLight : "#ffffff", // Pure white background for high contrast scan
        correctLevel : QRCode.CorrectLevel.H
    });
}