import React from 'react';
import ReactDOM from 'react-dom';
import Write from '../components/button/Write';

import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });



describe('write', () => {
    let component=null;

    it('성공적으로 렌더링 되야함.', () => {
        component=shallow(<Write />);
    });
    it('버튼이 잘 작동해야함.',()=>{
        component.find('.write').simulate('click');
    });
});