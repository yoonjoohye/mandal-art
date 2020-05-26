import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


// 1. dom에 부착되었는지
// 2. dom에서 떨어졌는지

it('잘 작동하는지?',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});