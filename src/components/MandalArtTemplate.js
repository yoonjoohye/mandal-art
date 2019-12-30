import React, {Component} from 'react';
import MandalArtTable from "./MandalArtTable";
import '../css/MandalArtTemplate.css';

class MandalArtTemplate extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="section">
                {/*<div className="title">만다라트</div>*/}
                <MandalArtTable></MandalArtTable>
            </section>
        )
    }
}

export default MandalArtTemplate;
