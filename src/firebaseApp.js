import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyDRQ4weZbic7PCWOa_13RqFRgO0Bv-aMDU",
    authDomain: "mandal-art-a55fa.firebaseapp.com",
    databaseURL: "https://mandal-art-a55fa.firebaseio.com",
    projectId: "mandal-art-a55fa",
    storageBucket: "mandal-art-a55fa.appspot.com",
    messagingSenderId: "432272679699",
    appId: "1:432272679699:web:d3aa103b8f7ceacf40f0e6",
    measurementId: "G-2FQ6WS5BD0"

    //전버전
    // apiKey: "AIzaSyA_cUj1Wy83xmB7bLbxsv-WK3g3dyDy55Q",
    // authDomain: "mandal-art-deadf.firebaseapp.com",
    // databaseURL: "https://mandal-art-deadf.firebaseio.com",
    // projectId: "mandal-art-deadf",
    // storageBucket: "mandal-art-deadf.appspot.com",
    // messagingSenderId: "34230846838",
    // appId: "1:34230846838:web:c1ed228641cb87b1eda657",
    // measurementId: "G-CL0CFLEEVV"
};

firebase.initializeApp(config);

// export default firebaseApp;