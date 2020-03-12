import React, {Component} from 'react';
import {Redirect,Link} from 'react-router-dom';
import {List} from 'immutable';

import Table from '../../../components/mandal/Table';
import Title from '../../../components/mandal/Title';
import Save from '../../../components/button/Save';
import Modal from '../../../components/modal/Modal';


class Write extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            data: List([
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                ]
            )
        }
    }

    titleChange=(data)=>{
        this.setState({
            title: data
        });
    }
    tableChange = (data) => {
        this.setState({
            data: data
        });
    }

    render() {
        let userInfo = JSON.parse(localStorage.getItem('logInfo'));

        return (
            <>
                {
                    !userInfo &&
                    <Modal
                        isOpen={true}
                        img={require('../../../assets/icon/login.svg')}
                        title="로그인이 필요"
                        contents="3초만에 구글 계정으로 로그인하세요.<br/>로그인 후 만다라트 계획표를 세워보세요!"
                        buttonName="홈으로 이동"
                        path="/"
                    />
                }
                <section className="mandal-section">
                    <div className="container">
                        <div className="border-bottom px-1 mb-30">
                            <Title title={this.state.title} titleChange={this.titleChange}> </Title>
                        </div>
                        <div className="mb-30">
                            <Table data={this.state.data} tableChange={this.tableChange}></Table>
                        </div>

                        <div className="text-center mb-50">
                            <Save title={this.state.title} data={this.state.data}></Save>
                        </div>

                    </div>
                </section>
            </>
        );
    }
}

export default Write;