import * as firebase from "firebase/app";

export const login=(type)=>{
    if(type==='google'){
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            let provider = new firebase.auth.GoogleAuthProvider();

            return firebase.auth().signInWithPopup(provider);
        }).catch((error) => {
            throw error;
        })
    }else if(type==='facebook'){
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            let provider = new firebase.auth.FacebookAuthProvider();

            return firebase.auth().signInWithPopup(provider);
        }).catch((error) => {
            throw error;
        })
    }
}

export const logout=()=>{
    firebase.auth().signOut().then(() => {
        return null;
    }).catch((error)=>{
        throw error;
    });
}