import React from 'react';
import ReactDOM from 'react-dom';
import Write from '../components/button/Write';

import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('write', () => {

    const component=shallow(<Write/>)
    it('성공적으로 렌더링 되야함.', () => {
        expect(component).toMatchSnapshot();
    });
    it('Link to 값이 /write로 있어야 함.',()=>{
        expect(component.find('Link').prop('to')).toBe('/write');
    });
    it('Link를 클릭하면 /write로 이동해야한다.', () => {
        let jestFn=jest.fn();
        component.find('Link').simulate('click');
        console.log(component);
    });

});