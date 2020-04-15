import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            title: this.props.title,
            contents: this.props.contents,
            path: this.props.path
        }
    }

    close = () => {
        this.setState({
            ...this.state,
            isOpen: false
        });
    }

    render() {
        const {isOpen, title, contents, path} = this.props;
        return (
            <>
                {
                    isOpen ?

                        <section className="w-100 h-100 bg-black position-fixed flex justify-center items-center">
                            <div className="fade-in modal-box bg-white box-round px-2 py-2 text-center">
                                <div className="font-xmd font-bold mb-20">{title}</div>
                                <div className="mb-30" dangerouslySetInnerHTML={{__html: contents}}></div>
                                <div>
                                    <button onClick={this.close}>취소</button>
                                    <Link to={path}>
                                        <button>확인</button>
                                    </Link>
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