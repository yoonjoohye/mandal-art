import React, {useState, useEffect} from 'react';
import * as firebase from "firebase";
import {connect} from "react-redux";
import ValidModal from "../modal/ValidModal";
import Modal from "../modal/Modal";

const Save = (props) => {
    const [data, setData] = useState();
    const [title, setTitle] = useState();
    const [openModal,setOpenModal]=useState(false);
    const [successSave,setSuccessSave]=useState(false);

    useEffect(() => {
        setTitle(props.title);
        setData(JSON.stringify(props.data));
    });

    const onSave = (e) => {
        e.preventDefault();

        if(title.length>0) {
            const {uid} = props.user;
            const database = firebase.database();

            let time = new Date();
            let date = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

            // console.log(data);

            database.ref(`mandal/${uid}/`).push({
                title: title,
                data: data,
                time: date
            }).then(() => {
                setSuccessSave(true);
            })
        } else{
            setOpenModal(true);
        }
    }
    const onOpen=(bool)=>{
        setOpenModal(bool);
    }

    return (
        <>
            {
                openModal &&
                <ValidModal isOpen={openModal}
                            title="제목을 입력해주세요"
                            contents="제목을 작성하지 않았습니다.<br/>제목을 작성하지 않으면 저장할 수 없습니다."
                            onOpen={onOpen}
                />
            }
            {
                successSave &&
                <Modal
                    isOpen={successSave}
                    isConfirm={false}
                    title="저장이 완료되었습니다."
                    contents="지금 바로 마이페이지에서 확인할 수 있습니다.<br/>저장된 내용을 확인해보세요."
                    buttonName="마이페이지로 가기"
                    path="/mypage"
                    bgColor="bg-opacity"
                />
            }
            <button className="btn save" onClick={onSave}>저장하기</button>
        </>
    );

}

export default connect(
    (state)=>({
        user:state.auth.user
    })
)(Save);