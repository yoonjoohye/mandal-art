import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';


const Modal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isConfirm, setIsConfirm] = useState(null);
    const [title, setTitle] = useState('제목');
    const [contents, setContents] = useState('컨텐츠');
    const [buttonName, setButtonName] = useState('확인');
    const [img, setImg] = useState(null);
    const [path, setPath] = useState('');
    const [bgColor, setBgColor] = useState('bg-black');

    useEffect(() => {
        setIsOpen(props.isOpen);
        setIsConfirm(props.isConfirm);
        setTitle(props.title);
        setContents(props.contents);
        setButtonName(props.buttonName);
        setImg(props.img);
        setPath(props.path);
        setBgColor(props.bgColor);
    });

    const onConfirm = () => {
        setIsOpen(false);
        props.onProgress(true);
    }
    const onCancel = () => {
        setIsOpen(false)
        props.onProgress(false);
    }


    return (
        <>
            {
                isOpen ?
                    <section
                        className={`w-100 h-100 left-0 top-0 position-fixed flex justify-center items-center ${bgColor}`}>
                        <div className="fade-in modal-box box-shadow bg-white box-round px-2 py-2 text-center">
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
                        </div>
                    </section> :
                    null
            }
        </>
    );
}

export default Modal;