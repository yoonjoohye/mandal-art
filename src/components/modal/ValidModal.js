import React, {useEffect, useState} from 'react';

const ValidModal = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('제목');
    const [contents, setContents] = useState('내용');

    useEffect(() => {
        setIsOpen(props.isOpen);
        setTitle(props.title);
        setContents(props.contents);
    });

    const close = () => {
        setIsOpen(false);
        props.onValidOpen(false);
    }

    return (
        <>
            {
                isOpen ?
                    <section
                        className="w-100 h-100 left-0 top-0 bg-opacity position-fixed flex justify-center items-center">
                        <div className="fade-in modal-box box-shadow bg-white box-round px-3 py-2 text-center">
                            <div className="font-xmd font-bold mb-10">{title}</div>
                            <div className="mb-20" dangerouslySetInnerHTML={{__html: contents}}></div>
                            <button className="btn save full" onClick={close}>확인</button>
                        </div>
                    </section>
                    :
                    null
            }
        </>
    );

}

export default ValidModal;