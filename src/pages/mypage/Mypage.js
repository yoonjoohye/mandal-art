import React, {useState, useEffect,useCallback} from 'react';
import * as firebase from "firebase";
import {connect} from 'react-redux';
import List from '../../molecules/List.js';
import Float from '../../components/button/Float';
import ReactHelmet from "../../components/ReactHelmet";
import Modal from "../../components/modal/Modal";


const Mypage = ({user}) => {
    const [list, setList] = useState([]);
    const [confirmModal, setConfirmModal] = useState(false);
    const [pageNo, setPageNo] = useState(null);
    const {uid} = user;
    const database = firebase.database();


    useEffect(() => {
        const dataList = [];
        database.ref(`/mandal/${uid}`).once('value').then((snapshot) => {
            const obj = snapshot.val();
            for (let key in obj) {
                dataList.push(obj[key]);
            }
            setList(dataList);
        });

    }, [uid,database]);

    const onDelete = useCallback((pageNo) => {
        setConfirmModal(true);
        setPageNo(pageNo);
    },[pageNo]);

    const onConfirmOpen = useCallback((bool) => {
        setConfirmModal(false);
        if (bool) {
            database.ref(`mandal/${uid}`).once('value', (snapshot) => {
                let obj = snapshot.val();
                let keyList = [];

                //키값 찾기
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        keyList.push(key);
                    }
                }

                //삭제
                database.ref(`mandal/${uid}/${keyList[pageNo]}`).remove();
            }).then(() => {
                window.location.reload();
            });
        }
    },[uid,database,pageNo]);

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
            <ReactHelmet
                title="마이페이지 - 나만의 만다라트"
                description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
                keywords="만다라트(mandal art) 사이트로 플랜(plan) 도구를 만나보세요! 나만의 만다라트를 만들어 성공 목표를 세워보세요."
            />
            <section className="mandal-section">
                <div className="container">
                    <div className="mandal-banner mb-50">
                        <div className="px-4 py-2 p-1-m flex justify-between items-center">
                            <div className="w-100-m text-center-m font-lg font-white">
                                나만의 <span className="yellow">만다라트</span>로<br/>
                                인생을 즐겁게!
                            </div>
                            <div className="only-pc">
                                {
                                    user ?
                                        <>
                                            <div className="font-lg text-center font-white">{user.displayName}</div>
                                            <div className="font-sm-m text-center font-white">{user.email}</div>
                                        </> :
                                        null
                                }
                            </div>
                        </div>
                    </div>

                    <List list={list} onDelete={onDelete}/>

                    <div className="position-fixed bottom-10 right-5 flex items-center text-center">
                        <Float></Float>
                    </div>
                </div>
            </section>
        </>
    )
}

export default connect(
    (state) => ({
        user: state.auth.user
    })
)(Mypage);
