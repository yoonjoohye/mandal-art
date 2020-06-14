import React from "react";
import {Link} from "react-router-dom";
import Delete from "../button/Delete";

const ListItem = ({data, index, onDelete}) => {
    const {title, time} = data;

    return (
        <div className="py-1 flex items-center justify-between border-bottom">
            <Link className="cursor-pointer" to={`detail/${index}`}>
                <div className="font-md mb-5">{title}</div>
                <div className="font-sm font-gray">{time} 작성</div>
            </Link>
            <div>
                <Delete pageNo={index} onDelete={onDelete}></Delete>
            </div>
        </div>
    );
}

export default ListItem;