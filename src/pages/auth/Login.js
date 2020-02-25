import React, {Component} from 'react';
import * as firebase from "firebase/app";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user: localStorage.getItem('logInfo')
        };
    }

    componentDidMount() {
        this.onLogin();
    }

    onLogin = () => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            var provider = new firebase.auth.GoogleAuthProvider();
            return firebase.auth().signInWithPopup(provider).then((authData) => {
                this.setState({
                    user: JSON.stringify(authData)
                });
            });
        }).catch((error) => {
            console.log(error);
        });

        window.location.reload();
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        localStorage.setItem('logInfo', nextState.user);
    }

}


export default Login;

