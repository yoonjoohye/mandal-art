import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as firebase from "firebase";
import ConfirmModal from "../modal/ConfirmModal";


const Delete = (props) => {
    const [openModal, setOpenModal] = useState(false);

    const onDelete = (e) => {

        e.preventDefault();

        setOpenModal(true);
    }

    const onProgress=(bool)=>{
        setOpenModal(bool);
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
                        // console.log(key);
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
                openModal &&
                <ConfirmModal isOpen={openModal}
                              title="정말 삭제하시겠습니까?"
                              contents="삭제하면 되돌릴 수 없습니다.<br/>그래도 삭제하시겠습니까?"
                              onProgress={onProgress}
                />
            }
            <button className="btn delete" onClick={onDelete}><img alt="만다라트-취소" className="w-100"
                                                                   src={require('../../assets/icon/cancel.svg')}/>
            </button>
        </>
    );

}

export default connect(
    (state) => ({
        user: state.auth.user
    })
)(Delete);