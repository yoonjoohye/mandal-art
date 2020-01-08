import React, {Component} from 'react';
import { List } from 'immutable';

class MandalArtTable extends Component {

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
            MandalArtData : List([
                List([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                List([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                List([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                List([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                List([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                List([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                List([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                List([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                List([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                ]
            )
        }
    }

    onChange = (e,tableIndex,dataIndex) => {
        const { value } = e.target;
        // let copyValues = [...this.state.MandalArtData];
        // copyValues[tableIndex][dataIndex] = value;
        // this.setState({MandalArtData : copyValues});

        const data = this.state.MandalArtData;

        let goal;

        if(tableIndex===4){
            goal=data.setIn([dataIndex,tableIndex],value).setIn([tableIndex,dataIndex],value);
        } else if(dataIndex===4){
            goal=data.setIn([dataIndex,tableIndex],value).setIn([tableIndex,dataIndex],value);
        } else {
            goal = data.setIn([tableIndex, dataIndex], value);
        }

        this.setState({MandalArtData : goal });
    }


    render() {
        return (
            <div className="grid outer-grid justify-between">
                {this.state.MandalArtData.map((table, tableIndex) => {
                    return (
                        <div className="grid inner-grid justify-between items-center" key={tableIndex}>
                            {table.map((data, dataIndex) => {
                                return (
                                    <input className="mandal-input" key={[dataIndex,tableIndex].join('_')} placeholder="목표" value={data} onChange={(e) => this.onChange(e,tableIndex,dataIndex)}/>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default MandalArtTable;