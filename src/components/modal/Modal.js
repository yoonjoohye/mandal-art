import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state={
            isOpen:false,
            isConfirm:false,
            title:'',
            contents:'',
            buttonName:'확인',
            img:'',
            path:''
        }
    }
    close=()=>{
        this.props.isOpen=false;
    }

    render() {
        const {isOpen,isConfirm,title,contents,buttonName,img,path}=this.props;
        return (
            <>
            {
                isOpen ?
                    <section className="w-100 h-100 bg-black position-fixed flex justify-center items-center">
                        <div className="modal-box bg-white box-round px-2 py-2 text-center">
                            {
                                img.length>0?
                                <div className="mb-10">
                                    <img className="modal-icon" src={img}/>
                                </div>:
                                null
                            }
                            <div className="font-xmd font-bold mb-20">{title}</div>
                            <div className="mb-30" dangerouslySetInnerHTML={{ __html: contents }}></div>

                            {
                                isConfirm?
                                    <div>
                                        <button onClick={this.close}>취소</button>
                                        <Link to={path}>
                                            <button>확인</button>
                                        </Link>
                                    </div>
                                    :
                                    <Link to={path}><button className="btn delete">{buttonName}</button></Link>
                            }
                        </div>

                    </section>:
                    null
            }
            </>
        );
    }
}

export default Modal;