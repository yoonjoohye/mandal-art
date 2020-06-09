import React from 'react';
import Write from '../components/button/Write';
import {mount, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('write', () => {
    let component = shallow(<Write/>);

    it('성공적으로 렌더링 되야함.', () => {
        expect(component).toMatchSnapshot();
    });
    it('버튼명이 시작하기여야함.', () => {
        expect(component.find('button').text()).toBe('시작하기');
    })
    it('Link to 값이 /write로 있어야 함.', () => {
        expect(component.find('Link').prop('to')).toBe('/write');
    });
    it('Link를 클릭하면 /write로 이동해야한다.', () => {
        component.find('Link').simulate('click');
    });

});