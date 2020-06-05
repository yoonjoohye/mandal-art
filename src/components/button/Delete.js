import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as firebase from "firebase";
import Modal from "../modal/Modal";


const Delete = (props) => {
    const [confirmModal, setConfirmModal] = useState(false);

    const onDelete = (e) => {
        e.preventDefault();
        setConfirmModal(true);
    }

    const onConfirmOpen=(bool)=>{
        setConfirmModal(false);
        if(bool){
            const {uid} = props.user;
            const database = firebase.database();

            database.ref(`mandal/${uid}`).once('value', (snapshot) => {
                let obj = snapshot.val();
                let keyList = [];

                //키값 찾기
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        keyList.push(key);
                    }
                }
                // console.log(keyList[props.pageNo]);
                //삭제
                database.ref(`mandal/${uid}/${keyList[props.pageNo]}`).remove();
            }).then(() => {
                window.location.reload();
            });
        }
    }
    return (
        <>
            {
                confirmModal &&
                <Modal isOpen={confirmModal}
                       isConfirm={true}
                       title="정말 삭제하시겠습니까?"
                       contents="삭제하면 되돌릴 수 없습니다.<br/>그래도 삭제하시겠습니까?"
                       bgColor="bg-opacity"
                       onConfirmOpen={onConfirmOpen}
                />
            }
            <button className="btn delete" onClick={onDelete}>
                <img alt="만다라트-취소" className="w-100" src={require('../../assets/img/icon/cancel.svg')}/>
            </button>
        </>
    );

}

export default connect(
    (state) => ({
        user: state.auth.user
    })
)(Delete);