import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isOpen, title, contents, buttonName, img, path} = this.props;
        return (


            <section className="w-100 h-100 bg-black position-fixed flex justify-center items-center">
                <div className="modal-box bg-white box-round px-2 py-2 text-center">
                    <div className="mb-10"><img className="modal-icon" src={img}/></div>
                    <div className="font-xmd font-bold mb-20">{title}</div>
                    <div className="mb-30" dangerouslySetInnerHTML={{ __html: contents }}></div>
                    <Link to={path}><button className="btn delete">다른 페이지로 이동</button></Link>
                </div>

            </section>


        );
    }
}

export default Modal;