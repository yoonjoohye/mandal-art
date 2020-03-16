import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import * as firebase from "firebase";

import Modal from '../modal/Modal';



const Save = (props) => {

    const [data, setData] = useState();
    const [title, setTitle] = useState();


    useEffect(() => {
        setTitle(props.title);
        setData(JSON.stringify(props.data));
    });

    const onSave = (e) => {
        if(title.length>0) {
            e.preventDefault();

            const uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;
            const database = firebase.database();

            let time = new Date();
            let date = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

            // console.log(mandalData);

            database.ref(`mandal/${uid}/`).push({
                title: title,
                data: data,
                time: date
            }).then(() => {
                window.location.href = 'mypage';
            })
        } else{
            props.onOpen(true);
        }
    }

    return (
        <>
            <button className="btn save" onClick={onSave}>저장하기</button>
        </>
    );

}

export default Save;