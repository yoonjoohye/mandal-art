import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class MandalArtList extends Component {

    onView = () => {

    }

    render() {
        return (
            <section className="mandal-section">

                <div className="flex justify-center items-center">
                    <div className="mandal-list"><Link to="/mandal/1">2019년 1월 인생계획</Link></div>
                </div>
            </section>
        )
    }
}

export default MandalArtList;
