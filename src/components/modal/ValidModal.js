import React, {useEffect, useState} from 'react';
import styled, {keyframes} from "styled-components";

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
const ValidModal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('제목');
    const [contents, setContents] = useState('내용');

    useEffect(() => {
        setIsOpen(props.isOpen);
        setTitle(props.title);
        setContents(props.contents);
    }, [props.isOpen, props.title, props.contents]);

    const close = () => {
        setIsOpen(false);
        props.onValidOpen(false);
    }

    return (
        <>
            {
                isOpen ?
                    <ModalSection bgColor="#ffffff94">
                        <ModalBox>
                            <div className="font-xmd font-bold mb-10">{title}</div>
                            <div className="mb-20" dangerouslySetInnerHTML={{__html: contents}}></div>
                            <button className="btn save full" onClick={close}>확인</button>
                        </ModalBox>
                    </ModalSection>
                    :
                    null
            }
        </>
    );

}

export default ValidModal;