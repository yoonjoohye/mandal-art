import styled from "styled-components";

import {fadeIn} from "./Animate.style";

export const Section = styled.section`
    padding: 100px 0;
    min-height: 100vh;
    @media(max-width: 480px) {
      padding: 85px 0;
    }`;

export const BackgroundSection = styled.section`
    background: url(${require('../img/index.jpg')});
    background-size: initial;
    background-repeat: no-repeat;
    @media(max-width:1024px){
        background-size: 200%;
    }
    @media(max-width: 480px) {
        background: #fff;
    }`;

export const HeaderSection = styled.header`
    position: fixed;
    z-index:2;
    top: 0;
    width: 100%;
    box-shadow: 0 1px 10px #00000063;
    background-color:${props => props.bgColor}
`;

export const NavSection = styled.nav`
  position: absolute;
  animation: ${fadeIn} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  right: 15%;
  margin-top: 10px;
  min-width: 250px;
  background-color: white;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  box-shadow: 0 0px 10px #00000020;
  @media(max-width:480px){
    right:5%;
    min-width:180px
  }
`;
export const NotFoundSection = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100vh;
`;

export const ModalSection = styled.section`
    position:fixed;
    width:100%;
    height:100%;
    left:0;
    right:0;
    top:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props => props.bgColor};
    backdrop-filter:blur(4px);
    z-index:3;
    `;

export const Container = styled.div`
    padding-right: 15%;
    padding-left: 15%;
    @media(max-width: 480px) {
      padding-right: 5%;
      padding-left: 5%;
    }`;

