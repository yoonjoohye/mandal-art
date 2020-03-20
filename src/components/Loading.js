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
        if (this.state.show) {
            return (
                <div className="display-inline-block">
                    <div className={'blinder'}/>
                    <div className={'spinner'}>
                        <img alt="만다라트-로딩" src={require('../assets/icon/loading.svg')}/>
                    </div>
                </div>
            );
        }
        return(
            <></>
        );
    }
}

export default Loading;