import React from 'react';
import ListItem from "../components/List/ListItem";


const List = ({list, onDelete}) => {

    return (
        <div className="mandal-list flex flex-col">
            {
                list.length !== 0 ?
                    list.map((data, index) => {
                        return (
                            <ListItem key={index} data={data} index={index} onDelete={onDelete}></ListItem>
                        )
                    })
                    :
                    <div className="py-1 text-center">
                        <img alt="만다라트-존재하지않는이미지" className="nothing-img"
                             src={require('../assets/img/nothing.jpg')}/>
                    </div>
            }
        </div>
    )
}

export default List;
