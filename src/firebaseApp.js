import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyA_cUj1Wy83xmB7bLbxsv-WK3g3dyDy55Q",
    authDomain: "mandal-art-deadf.firebaseapp.com",
    databaseURL: "https://mandal-art-deadf.firebaseio.com",
    projectId: "mandal-art-deadf",
    storageBucket: "mandal-art-deadf.appspot.com",
    messagingSenderId: "34230846838",
    appId: "1:34230846838:web:c1ed228641cb87b1eda657",
    measurementId: "G-CL0CFLEEVV"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

export default firebaseApp;