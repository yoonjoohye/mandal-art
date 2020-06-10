import React, {useState, useEffect} from 'react';

const Loading = (props) => {
    const [show, setShow] = useState(props.show);

    useEffect(() => {
        setShow(props.show);
    },[props.show]);
    return (
        <>
            {
                show ?
                    <section
                        className="w-100 h-100 left-0 top-0 bg-black position-fixed flex justify-center items-center">
                        <div className="spinner">
                            <img className="w-100" alt="만다라트-로딩" src={require('../assets/img/icon/loading.svg')}/>
                        </div>
                    </section> :
                    null
            }
        </>
    )

}

export default Loading;