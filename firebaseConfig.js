import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCN5DQ4ku2YZD2Ow7pSUQz_g_Z5UrH6qfY",
    authDomain: "dsp01t.firebaseapp.com",
    projectId: "dsp01t",
    storageBucket: "dsp01t.appspot.com",
    messagingSenderId: "968404856212",
    appId: "1:968404856212:web:9b9d27cc392ca85bd97381"
  };

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
