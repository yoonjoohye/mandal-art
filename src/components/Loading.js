import React, {useState, useEffect} from 'react';
import {ModalSection} from "../assets/css/Section.style";

const Loading = (props) => {
    const [show, setShow] = useState(props.show);

    useEffect(() => {
        setShow(props.show);
    },[props.show]);
    return (
        <>
            {
                show ?
                    <ModalSection bgColor="rgba(0, 0, 0, 0.68)">
                        <img className="w-5 h-5" alt="만다라트-로딩" src={require('../assets/img/icon/loading.svg')}/>
                    </ModalSection> :
                    null
            }
        </>
    )

}

export default Loading;