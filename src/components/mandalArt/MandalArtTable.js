import React, {Component} from 'react';
import {List} from 'immutable';

class MandalArtTable extends Component {
    componentDidMount(){
        console.log(this.props.match.params.id);
    }

    constructor(props) {
        super(props);
        this.state = {
            // MandalArtData: [
            //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
            //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
            //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
            //     ['하이', 2, 3, 4, 5, 6, 7, 8, 9],
            //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
            //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
            //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
            //     [1, 2, 3, 4, 5, 6, 7, 8, 9],
            //     [1, 2, 3, 4, 5, 6, 7, 8, 9]
            // ],
            MandalArtData: List([
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

    onChange = (e, tableIndex, dataIndex) => {
        const {value} = e.target;
        // let copyValues = [...this.state.MandalArtData];
        // copyValues[tableIndex][dataIndex] = value;
        // this.setState({MandalArtData : copyValues});

        const data = this.state.MandalArtData;

        let goal;

        if (tableIndex === 4) {
            goal = data.setIn([dataIndex, tableIndex], value).setIn([tableIndex, dataIndex], value);
        } else if (dataIndex === 4) {
            goal = data.setIn([dataIndex, tableIndex], value).setIn([tableIndex, dataIndex], value);
        } else {
            goal = data.setIn([tableIndex, dataIndex], value);
        }

        this.setState({MandalArtData: goal});
    }

    onSave=()=>{
        localStorage.setItem('mandalArt',this.state.MandalArtData);
        //데이터베이스에 mandalArt 값 넣고
        //List에서 데이터가 몇개 있는지 확인 필요.
    }

    onPrint=()=>{
        window.print();
    }

    onPlaceholder=(tableIndex,dataIndex)=> {
        if (tableIndex === 4) {
            if(dataIndex===4){
                return '최종목표';
            }
            else{
                return '목표';
            }
        } else if(dataIndex===4){
            return '목표';
        }
    }

    render() {
        return (
            <section className="mandal-section">
                <div className="grid outer-grid justify-between">
                    {this.state.MandalArtData.map((table, tableIndex) => {
                        return (
                            <div className="grid inner-grid justify-between items-center" key={tableIndex}>
                                {table.map((data, dataIndex) => {
                                    return (
                                        <input className="mandal-input" key={[dataIndex, tableIndex].join('_')}
                                               placeholder={this.onPlaceholder(tableIndex,dataIndex)} value={data}
                                               onChange={(e) => this.onChange(e, tableIndex, dataIndex)}/>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center"><button onClick={this.onSave}>저장하기</button></div>
                <div className="flex justify-center"><button onClick={this.onPrint}>프린트하기</button></div>

            </section>
        );
    }
}

export default MandalArtTable;