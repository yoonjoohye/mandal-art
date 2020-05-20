import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            title: this.props.title,
            contents: this.props.contents
        }
    }

    onCancel = () => {
        this.setState({
            ...this.state,
            isOpen: false
        });
        this.props.onProgress(false);
    }
    onConfirm=()=>{
        this.setState({
            ...this.state,
            isOpen: false
        });
        this.props.onProgress(true);
    }

    render() {
        let {isOpen, title, contents} = this.props;
        return (
            <>
                {
                    isOpen ?
                        <section className="w-100 h-100 left-0 top-0 bg-opacity position-fixed flex justify-center items-center">
                            <div className="fade-in modal-box box-shadow bg-white box-round px-3 py-2 text-center">
                                <div className="font-xmd font-bold mb-10">{title}</div>
                                <div className="mb-30" dangerouslySetInnerHTML={{__html: contents}}></div>
                                <div>
                                    <button className="btn outline" onClick={this.onConfirm}>확인</button>
                                    <button className="btn noline" onClick={this.onCancel}>취소</button>
                                </div>
                            </div>
                        </section> :
                        null
                }
            </>
        );
    }
}

export default Modal;