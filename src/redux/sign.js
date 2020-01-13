import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import FirebaseApp from '../firebvaseApp';

//액션타입 정의
const GOOGLE = 'google';

// 액션 생성 함수 정의
function getProviderObject(provider) {
    return {
        [GOOGLE]: new firebase.auth.GoogleAuthProvider()
    }[provider] || null;
}

function signInWithProvider(provider) {
    const providerObject = getProviderObject(provider);

    providerObject.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then((authData) => {
        console.log(authData);
        this.setState({
            token: authData.credential.accessToken,
            user: authData.user.displayName
        });

    }).catch(function (error) {
        console.log(error);
    });
}

function signOutWithProvider() {
    firebase.auth().signOut().then(() => {
    }).catch(function (error) {
        // An error happened.
    });
}