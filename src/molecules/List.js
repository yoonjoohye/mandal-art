import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Delete from '../components/button/Delete';


const List = (props) => {
    const [index, setIndex] = useState(props.index);
    const [data, setData] = useState(props.data);

    useEffect(() => {
        setIndex(props.index);
        setData(props.data);
    });

    return (
        <div key={index}>
            <div className="py-1 flex items-center justify-between border-bottom">
                <Link className="cursor-pointer" to={`detail/${index}`}>
                    <div className="font-md mb-5">{data.title}</div>
                    <div className="font-sm font-gray">{data.time} 작성</div>
                </Link>
                <div>
                    <Delete pageNo={index}></Delete>
                </div>
            </div>
        </div>
    )
}

export default List;
