import React, {useState, useEffect} from 'react';
import * as firebase from "firebase";
import {connect} from "react-redux";
import ValidModal from "../modal/ValidModal";
import Modal from "../modal/Modal";

const Edit = (props) => {
    const [title, setTitle] = useState('');
    const [data, setData] = useState('');
    const [validModal,setValidModal]=useState(false);
    const [successEdit, setSuccessEdit] = useState(false);

    useEffect(() => {
        setTitle(props.title);
        setData(JSON.stringify(props.data));
    });
    console.log(title);

    const onEdit = (e) => {
        e.preventDefault();
        if(title.length>0) {
            const {uid} = props.user;
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
            }).then(() => {
                setSuccessEdit(true);
            });
        }else{
            setValidModal(true);
        }
    }
    const onProgress=(bool)=>{
        setSuccessEdit(false);
        if(bool){
            window.location.href='/mypage';
        }
    }

    return (
        <>
            {
                validModal &&
                <ValidModal isOpen={validModal}
                            title="제목을 입력해주세요"
                            contents="제목을 작성하지 않았습니다.<br/>제목을 작성하지 않으면 저장할 수 없습니다."
                />
            }
            {
                successEdit &&
                <Modal isOpen={successEdit}
                       isConfirm={true}
                       title="수정이 완료되었습니다."
                       contents="지금 바로 마이페이지에서 확인할 수 있습니다.<br/>수정된 내용을 확인하시겠습니까?"
                       bgColor="bg-opacity"
                       onProgress={onProgress}
                />
            }
            <button className="btn edit" onClick={onEdit}>수정완료</button>
        </>
    );

}

export default connect(
    (state)=>({
        user:state.auth.user
    })
)(Edit);