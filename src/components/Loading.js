import React, {Component} from 'react';
import '../css/Loading.scss'

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
        let divStyle = {display: 'inline-block'};
        if (this.state.show) {
            return (
                <div style={divStyle}>
                    <div className={'blinder'}/>
                    <div className={'spinner'}>
                        <img alt="로딩" src={require('../assets/loading.svg')}/>
                    </div>
                </div>
            );
        }
        return (<div style={divStyle}/>);
    }
}

export default Loading;