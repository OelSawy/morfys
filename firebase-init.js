import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAqbOCF9kHmx5Bs7melRWkRV3geGtHTGg",
  authDomain: "se-milestone2.firebaseapp.com",
  projectId: "se-milestone2",
  storageBucket: "se-milestone2.appspot.com",
  messagingSenderId: "157739684092",
  appId: "1:157739684092:web:3c7b22e721a03a49430779",
  measurementId: "G-Y7PM19STF0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
