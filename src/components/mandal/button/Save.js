import React, {useState,useEffect} from 'react';
import * as firebase from "firebase";

const Save = (props) => {

    const [mandalData,setMandalData]=useState();

    useEffect(()=>{
        setMandalData(JSON.stringify(props.data));
    });

    const onSave=(e)=>{
        e.preventDefault();

        const uid=JSON.parse(localStorage.getItem('logInfo')).user.uid;
        const database = firebase.database();

        let time=new Date();
        let date=`${time.getFullYear()}년 ${time.getMonth()+1}월 ${time.getDate()}일 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

        // console.log(mandalData);

        database.ref(`mandal/${uid}/`).push({
            data: mandalData,
            time: date
        });
    }

    return (
        <button onClick={onSave}>저장</button>
    );

}

export default Save;