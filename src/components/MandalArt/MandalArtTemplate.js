import React, {Component} from 'react';
import MandalArtTable from "./MandalArtTable";
import '../../css/MandalArtTemplate.css';

class MandalArtTemplate extends Component {

    render() {
        return (
            <section className="section">
                <MandalArtTable/>
            </section>
        )
    }
}

export default MandalArtTemplate;
