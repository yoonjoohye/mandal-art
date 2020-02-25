import React, {Component} from 'react';
import * as firebase from "firebase/app";


class Logout extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.onLogout();
    }

    onLogout = (e) => {
        e.preventDefault();

        firebase.auth().signOut().then(() => {
            localStorage.removeItem('logInfo');

        }).catch(function (error) {
            console.log(error);
        });

        window.location.href = '/';
    }
}


export default Logout;

