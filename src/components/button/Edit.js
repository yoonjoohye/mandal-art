import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import * as firebase from "firebase";

const Edit = (props) => {

    const [title, setTitle] = useState();
    const [data, setData] = useState();
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        setTitle(props.title);
        setData(JSON.stringify(props.data));
    });

    const onEdit = (e) => {
        e.preventDefault();

        const uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;
        const database = firebase.database();

        let time = new Date();
        let date = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

        database.ref(`mandal/${uid}`).once('value', (snapshot) => {
            let obj = snapshot.val();
            let keyList = [];

            //키값 찾기
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    keyList.push(key);
                    // console.log(key);
                }
            }
            // console.log(props.pageNo);
            database.ref(`mandal/${uid}/${keyList[props.pageNo]}`).update({
                title: title,
                data: data,
                time: date
            });
        });

        setRedirect(true);

    }

    return (
        <>
            {
                redirect && <Redirect to='/list'/>
            }
            <button className="btn edit" onClick={onEdit}>수정</button>
        </>
    );

}

export default Edit;