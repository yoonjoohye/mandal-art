import {shallow} from "enzyme";
import Mypage from "../pages/mypage/Mypage";
import React from "react";

describe('Mypage', () => {
    let info = {
        user: {
            email: 'dfsdfs@naver.com',
            displayName: 'aaa',
            uid: 'sdfsdfsdf'
        }
    }

    it('성공적으로 렌더링 되어야함', () => {
        // const component = shallow(<Mypage/>);
        // expect(component).toMatchSnapshot();
    });

    it('데이터가 나와야함.', () => {

    });
    it('데이터가 클릭되어야함.', () => {

    });
});

describe('List',()=>{
    it('List 렌더링 되어야함', () => {

    });

});

describe('ListItem',()=>{
    it('Listitem 렌더링 되어야함', () => {

    });
});

describe('Delete',()=>{
    it('delete 렌더링 되어야함', () => {

    });
    it('delete 함수가 실행되어야함', () => {

    });
    it('데이터가 삭제되어야함.', () => {

    });
})
