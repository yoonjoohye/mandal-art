import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Write from "../button/Write";
import {MarkdownLg, MarkdownBase} from "../../assets/css/Markdown.style";
import styled from "styled-components";
import {media} from "../../assets/css/Media.style";
import {Color} from "../../assets/css/Theme.style";
import {FlexBox, OnlyMobile, OnlyPc} from "../../assets/css/Section.style";
import {Img} from "../../assets/css/Image.style";


const ExplainWrapper = styled.div`
  margin-bottom:100px;
  ${media.md`
        margin-bottom: 80px;
   `}
  ${media.sm`
    margin-bottom:50px;
  `}
  
  &.main{
    text-align:center;
    margin-top:200px;
    ${media.md`
        margin-top:0;
    `}
  }
  &.sub{
    ${FlexBox('space-between')};

  }
`;

const ExplainBox = styled.div`
  width:100%;
  text-align:${props => props.textAlign || 'right'}
`

const ExplainTitle = styled(MarkdownLg)`
  border-bottom:1px solid ${Color.gray100};
  padding:1rem 0;
  margin-bottom:20px;
  ${media.sm`
    margin-bottom:10px;
    padding:0.3rem 0;

  `}
`;

const ExplainContent = styled(MarkdownBase)`
  margin-bottom:50px;
  ${media.sm`margin-bottom:30px;`}
`;

const Pc = styled.span`
  ${OnlyPc};
`;

const Mobile = styled.br`
  ${OnlyMobile};
`;

const ExplainImg = styled(Img)`
  &.right{
  margin-right:50px;
  ${media.sm`
    margin-right:0;
  `}
  }
  
  &.left{
  margin-left:50px;
  ${media.sm`
    margin-left:0;
  `}
  }
`
const Explain = ({explain}) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <ExplainWrapper data-aos="zoom-in" className="main">
                <ExplainTitle fontWeight={400}>만다라트란?</ExplainTitle>
                <ExplainContent fontWeight={400} color={Color.gray300}>
                    <Pc>만다라트(Mandal-Art) 기법은</Pc> 일본의 '이마이즈미 히로아키'가 구상했습니다.<br/>
                    Manda(본질의 깨달음)+la(성취)+art(기술)의 합성어로<Mobile/> '목적을 달성하는 기술'을 뜻합니다.<br/>
                </ExplainContent>
            </ExplainWrapper>

            {
                explain.map((data, index) => {

                    return (
                        <ExplainWrapper className="sub" key={index} data-aos="zoom-in">
                            {
                                index % 2 === 0 &&
                                <ExplainImg className="right" src={require(`../../assets/img/${data.img}`)}
                                            alt={`만다라트-${data.title}`}/>
                            }
                            <ExplainBox textAlign={index % 2 === 1 && "left"}>
                                <ExplainTitle fontWeight={400}>{data.title}</ExplainTitle>
                                <ExplainContent fontWeight={400} color={Color.gray300} dangerouslySetInnerHTML={{__html: data.contents}}/>
                                <Write/>
                            </ExplainBox>
                            {
                                index % 2 === 1 &&
                                <ExplainImg className="left" src={require(`../../assets/img/${data.img}`)}
                                            alt={`만다라트-${data.title}`}/>
                            }
                        </ExplainWrapper>
                    )
                })
            }
        </>
    );
}

export default Explain;