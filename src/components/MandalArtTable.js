import React, {Component} from 'react';

class MandalArtTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            MandalArtData: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                ['하이', 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9],
                [1, 2, 3, 4, 5, 6, 7, 8, 9]
            ],
        }
        this.aaChange = this.aaChange.bind(this);
        this.abChange = this.abChange.bind(this);
        this.acChange = this.acChange.bind(this);
        this.baChange = this.baChange.bind(this);
        this.bbChange = this.bbChange.bind(this);
        this.bcChange = this.bcChange.bind(this);
        this.caChange = this.caChange.bind(this);
        this.cbChange = this.cbChange.bind(this);
        this.ccChange = this.ccChange.bind(this);

    }

    aaChange = (e) => {
        this.state.aa=e.target.value;
    }
    abChange = (e) => {
        this.state.ab= e.target.value;
    }
    acChange = (e) => {
        this.state.ac= e.target.value;
    }
    baChange = (e) => {
        this.state.ba= e.target.value;
    }
    bbChange = (e) => {
        this.state.bb= e.target.value;
    }
    bcChange = (e) => {
        this.state.bc= e.target.value;
    }
    caChange = (e) => {
        this.state.ca= e.target.value;
    }
    cbChange = (e) => {
        this.state.cb= e.target.value;
    }
    ccChange = (e) => {
        this.state.cc= e.target.value;
    }

    render() {
        return (
            <div className="grid outer-grid justify-between">
                {this.state.MandalArtData.map((data, idx) => {
                    return (
                        <div className="grid inner-grid justify-between items-center" key={idx}>

                            <textarea value={this.state.aa} onChange={this.aaChange}/>
                            <textarea value={this.state.ab} onChange={this.abChange}/>
                            <textarea value={this.state.ac} onChange={this.acChange}/>
                            <textarea value={this.state.ba} onChange={this.baChange}/>
                            <textarea value={this.state.bb} onChange={this.bbChange}/>
                            <textarea value={this.state.bc} onChange={this.bcChange}/>
                            <textarea value={this.state.ca} onChange={this.caChange}/>
                            <textarea value={this.state.cb} onChange={this.cbChange}/>
                            <textarea value={this.state.cc} onChange={this.ccChange}/>

                            {/*{data.map((data, idx) => {*/}
                            {/*    return (*/}
                            {/*        <textarea key={idx} value={this.state.value} onChange={this.handleChange}/>*/}
                            {/*    );*/}
                            {/*})}*/}
                        </div>
                    );
                })}
            </div>

        );
    }
};

export default MandalArtTable;