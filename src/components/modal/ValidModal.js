import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
            title: this.props.title,
            contents: this.props.contents,
        }
    }

    close = () => {
        this.setState({
            ...this.state,
            isOpen: false
        });
        this.props.onOpen(false);
    }

    render() {
        return (
            <>
                {
                    this.state.isOpen ?

                        <section className="w-100 h-100 bg-opacity position-fixed flex justify-center items-center">
                            <div className="fade-in modal-box box-shadow bg-white box-round px-2 py-2 text-center">
                                <div className="font-xmd font-bold mb-10">{this.state.title}</div>
                                <div className="mb-20" dangerouslySetInnerHTML={{__html: this.state.contents}}></div>
                                <button className="btn save full" onClick={this.close}>확인</button>
                            </div>

                        </section>
                        :
                        null
                }
            </>
        );
    }
}

export default Modal;