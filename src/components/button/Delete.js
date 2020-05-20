import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as firebase from "firebase";


const Delete=(props)=>{

    const onDelete=(e)=>{
        e.preventDefault();

        const {uid} = props.user;
        const database = firebase.database();

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
            // console.log(keyList[props.pageNo]);
            //삭제
            database.ref(`mandal/${uid}/${keyList[props.pageNo]}`).remove();
        }).then(()=>{
           window.location.reload();
        });
    }

    return(
        <>
            <button className="btn delete" onClick={onDelete}><img alt="만다라트-취소" className="w-100" src={require('../../assets/icon/cancel.svg')}/></button>
        </>
    );

}

export default connect(
    (state)=>({
        user:state.auth.user
    })
)(Delete);