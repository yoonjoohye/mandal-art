import React from 'react';

const MandalArtTable = ({value, onChange}) => {
    return (

            <div className="grid inner-grid justify-between items-center">
                <textarea value={value} onChange={onChange}/>
                <textarea value={value} onChange={onChange}/>
                <textarea value={value} onChange={onChange}/>
                <textarea value={value} onChange={onChange}/>
                <textarea value={value} onChange={onChange}/>
                <textarea value={value} onChange={onChange}/>
                <textarea value={value} onChange={onChange}/>
                <textarea value={value} onChange={onChange}/>
                <textarea value={value} onChange={onChange}/>
            </div>

    );
};

export default MandalArtTable;