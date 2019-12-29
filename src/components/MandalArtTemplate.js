import React, {Component} from 'react';
import MandalArtTable from "./MandalArtTable";
import '../css/MandalArtTemplate.css';

class MandalArtTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {

            MandalArtData: [
                {
                    table1: [
                        {aa: ''},
                        {ab: ''},
                        {ac: ''},
                        {ba: ''},
                        {bb: ''},
                        {bc: ''},
                        {ca: ''},
                        {cb: ''},
                        {cc: ''}
                    ]
                },
                {
                    table2: [
                        {aa: ''},
                        {ab: ''},
                        {ac: ''},
                        {ba: ''},
                        {bb: ''},
                        {bc: ''},
                        {ca: ''},
                        {cb: ''},
                        {cc: ''}
                    ]
                },
                {
                    table3: [
                        {aa: ''},
                        {ab: ''},
                        {ac: ''},
                        {ba: ''},
                        {bb: ''},
                        {bc: ''},
                        {ca: ''},
                        {cb: ''},
                        {cc: ''}
                    ]
                },
                {
                    table4: [
                        {aa: ''},
                        {ab: ''},
                        {ac: ''},
                        {ba: ''},
                        {bb: ''},
                        {bc: ''},
                        {ca: ''},
                        {cb: ''},
                        {cc: ''}
                    ]
                },
                {
                    table5: [
                        {aa: ''},
                        {ab: ''},
                        {ac: ''},
                        {ba: ''},
                        {bb: ''},
                        {bc: ''},
                        {ca: ''},
                        {cb: ''},
                        {cc: ''}
                    ]
                },
                {
                    table6: [
                        {aa: ''},
                        {ab: ''},
                        {ac: ''},
                        {ba: ''},
                        {bb: ''},
                        {bc: ''},
                        {ca: ''},
                        {cb: ''},
                        {cc: ''}
                    ]
                },
                {
                    table7: [
                        {aa: ''},
                        {ab: ''},
                        {ac: ''},
                        {ba: ''},
                        {bb: ''},
                        {bc: ''},
                        {ca: ''},
                        {cb: ''},
                        {cc: ''}
                    ]
                },
                {
                    table8: [
                        {aa: ''},
                        {ab: ''},
                        {ac: ''},
                        {ba: ''},
                        {bb: ''},
                        {bc: ''},
                        {ca: ''},
                        {cb: ''},
                        {cc: ''}
                    ]
                },
                {
                    table9: [
                        {aa: ''},
                        {ab: ''},
                        {ac: ''},
                        {ba: ''},
                        {bb: ''},
                        {bc: ''},
                        {ca: ''},
                        {cb: ''},
                        {cc: ''}
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <section className="section">
                {/*<div className="title">만다라트</div>*/}
                    <div className="grid outer-grid justify-between">
                        {this.state.MandalArtData.map((data, idx) => {
                            return (
                                <MandalArtTable/>
                            );
                        })}
                    </div>
            </section>
        )
    }
}

export default MandalArtTemplate;
