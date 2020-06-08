import React from 'react';
import {Link} from 'react-router-dom';

const Write = (props) => {
    return(
        <Link to="/write">
            <button className="btn write font-white">시작하기</button>
        </Link>
    );
}


export default Write;