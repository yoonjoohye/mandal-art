import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled,{keyframes} from 'styled-components';

const ModalSection=styled.section`
        position:fixed;
        width:100%;
        height:100%;
        left:0;
        right:0;
        top:0;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:${props=>props.bgColor};
        backdrop-filter:blur(4px);
        z-index:3;
    `;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ModalBox=styled.div`
        animation: ${fadeIn} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        max-width:100%;
        max-height:100%;
        box-shadow:0 0 15px rgba(0, 0, 0, 0.1);
        background-color:white;
        padding:2rem;
        border-radius:1rem;
        text-align:center;
        @media(max-width:480px){
          border-radius: 0.8rem;
        }
    `;

const Modal = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [title, setTitle] = useState('제목');
    const [contents, setContents] = useState('내용');
    const [buttonName, setButtonName] = useState('확인');
    const [img, setImg] = useState(null);
    const [path, setPath] = useState('');
    const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0.68)');

    useEffect(() => {
        setIsOpen(props.isOpen);
        setIsConfirm(props.isConfirm);
        setTitle(props.title);
        setContents(props.contents);
        setButtonName(props.buttonName);
        setImg(props.img);
        setPath(props.path);
        setBgColor(props.bgColor);
    },[props.isOpen,props.isConfirm,props.title,props.contents,props.buttonName,props.img,props.path,props.bgColor]);

    const onConfirm = () => {
        setIsOpen(false);
        props.onConfirmOpen(true);
    }
    const onCancel = () => {
        setIsOpen(false)
        props.onConfirmOpen(false);
    }

    return (
        <>
            {
                isOpen ?
                    <ModalSection bgColor={bgColor}>
                    <ModalBox>
                            {
                                img ?
                                    <div className="mb-10">
                                        <img alt="만다라트-모달" className="modal-icon" src={img}/>
                                    </div> :
                                    null
                            }
                            <div className="font-xmd font-bold mb-20">{title}</div>
                            <div className="mb-30" dangerouslySetInnerHTML={{__html: contents}}></div>
                            {
                                isConfirm ?
                                    <>
                                        <button className="btn save mr-10" onClick={onConfirm}>확인</button>
                                        <button className="btn outline" onClick={onCancel}>취소</button>
                                    </>
                                    :
                                    <Link to={path}>
                                        <button className="btn save full">{buttonName}</button>
                                    </Link>
                            }
                    </ModalBox>
                    </ModalSection>:
                    null
            }
        </>
    );
}

export default Modal;