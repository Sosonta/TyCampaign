// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbKg2Gjt0YjkBF3CqgbQ8REzX8pRc_Slw",
  authDomain: "tycampaign-284a8.firebaseapp.com",
  projectId: "tycampaign-284a8",
  storageBucket: "tycampaign-284a8.firebasestorage.app",
  messagingSenderId: "584795277134",
  appId: "1:584795277134:web:90681d640670389e15401f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
