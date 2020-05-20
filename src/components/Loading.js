import React, {Component} from 'react';

class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: this.props.show
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            show: nextProps.show
        });
    }

    render() {
        let {show}=this.state

        return (
            <>
            {
                show ?
                    <section className="w-100 h-100 left-0 top-0 bg-black position-fixed flex justify-center items-center">
                        <div className="spinner">
                            <img className="w-100" alt="만다라트-로딩" src={require('../assets/icon/loading.svg')}/>
                        </div>
                    </section> :
                    null
            }
            </>
        )
    }
}

export default Loading;