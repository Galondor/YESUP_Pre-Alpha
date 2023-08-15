console.log("Hello World");
import { initializeApp } from "firebase/app";
import { getDatabse, ref, set } from "firebase/database";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAhG9xxAGOgwJqNJ74KNH8-SQa1-Vms4x8",
    authDomain: "yesup-cadef.firebaseapp.com",
    databaseURL: "https://yesup-cadef-default-rtdb.firebaseio.com",
    projectId: "yesup-cadef",
    storageBucket: "yesup-cadef.appspot.com",
    messagingSenderId: "165195293447",
    appId: "1:165195293447:web:267658e9134cff8afc9ba2",
    measurementId: "G-WMH0DESMEM"
  });

function writeUserData(firstName, lastName, score, time, date, email) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);

    set(reference, {
        firstName: firstName,
        lastName: lastName,
        score: score,
        time: time,
        date: date,
        email, email
    });
}

writeUserData("Jonathan", "Pearson", "85", "12:00", "12/12/12", "johnyjoejoe55@gmail.com");
console.log("Wrote to database");
