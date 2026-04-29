import { checkLoginCookie, appName } from './utils.js';

if (checkLoginCookie("uid")) {
    console.log(`Welcome to ${appName}`);
    window.location = "main.html";
} else {
    window.location = "landing.html";
}