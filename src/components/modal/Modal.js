import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ModalSection} from "../../assets/css/Section.style";
import styled from "styled-components";
import {Color} from "../../assets/css/Theme.style";
import {fadeIn} from "../../assets/css/Animate.style";
import {MarkdownBase, MarkdownXmd} from "../../assets/css/Markdown.style";
import {media} from "../../assets/css/Media.style";
import {Button} from '../../assets/css/Button.style';
import {IconSm} from "../../assets/css/Image.style";

const ModalBox = styled.div`
    animation: ${fadeIn} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    width:300px;
    box-shadow:0 0 15px rgba(0, 0, 0, 0.1);
    background-color:white;
    padding:2.5rem 3rem;
    border-radius:1rem;
    text-align:center;
    ${media.sm`
    width: 210px;
    border-radius: 0.8rem;
    padding: 1.5rem 2rem;
    `}
`;

const ModalTitle = styled(MarkdownXmd)`
  margin-bottom:20px;
  ${media.sm`margin-bottom:10px;`}
`;

const ModalContent = styled(MarkdownBase)`
  margin-bottom:30px;
  ${media.sm`margin-bottom:20px;`}
`
const ConfirmButton=styled(Button)`
    padding: 0.5rem 2rem;
    background-color: ${Color.pink200};
    color: ${Color.white};
    &:hover {
      background-color: ${Color.pink400};
    }
    ${media.sm`
          padding: 0.5rem 1rem;
    `}
    &.full{
      width:100%;
    }
    &.small{
      margin-right:10px;
    }
`;
const CancelButton=styled(Button)`
    padding: 0.5rem 2rem;
    border:1px solid ${Color.pink200};
    color: ${Color.pink200};
    &:hover {
      background-color: #ff83a824;
    }
    ${media.sm`
        font-size: 11px;
         padding: 0.5rem 1rem;
    `}
`;
const ModalIcon=styled(IconSm)`
  margin-bottom:10px;
`
const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [title, setTitle] = useState('제목');
    const [contents, setContents] = useState('내용');
    const [buttonName, setButtonName] = useState('확인');
    const [img, setImg] = useState(null);
    const [path, setPath] = useState('');
    const [bgColor, setBgColor] = useState(Color.blackOpacity);

    useEffect(() => {
        setIsOpen(props.isOpen);
        setIsConfirm(props.isConfirm);
        setIsValid(props.isValid);
        setTitle(props.title);
        setContents(props.contents);
        setButtonName(props.buttonName);
        setImg(props.img);
        setPath(props.path);
        setBgColor(props.bgColor);
    }, [props]);

    const onConfirm = () => {
        setIsOpen(false);
        props.onConfirmOpen(true);
    }
    const onCancel = () => {
        setIsOpen(false);
        props.onConfirmOpen(false);
    }
    const onClose = () => {
        setIsOpen(false);
        props.onValidOpen(false);
    }

    return (
        <>
            {
                isOpen ?
                    <ModalSection bgColor={bgColor}>
                        <ModalBox>
                            {
                                img &&
                                <ModalIcon alt="만다라트-모달" src={img}/>
                            }
                            <ModalTitle fontWeight={600}>{title}</ModalTitle>
                            <ModalContent dangerouslySetInnerHTML={{__html: contents}}></ModalContent>
                            {
                                isConfirm ?
                                    <>
                                        <ConfirmButton className="small" onClick={onConfirm}>확인</ConfirmButton>
                                        <CancelButton onClick={onCancel}>취소</CancelButton>
                                    </>
                                    :
                                    isValid ?
                                        <ConfirmButton className="full" onClick={onClose}>확인</ConfirmButton>
                                        :
                                        <Link to={path}>
                                            <ConfirmButton className="full">{buttonName}</ConfirmButton>
                                        </Link>
                            }
                        </ModalBox>
                    </ModalSection> :
                    null
            }
        </>
    );
}

export default Modal;