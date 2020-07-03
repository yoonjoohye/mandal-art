import React, { useState } from 'react';
import ReactHelmet from '../../components/ReactHelmet';
import Explain from '../../components/index/Explain';
import Write from '../../components/button/Write';
import styled from 'styled-components';
import { BackgroundSection, Container } from '../../assets/css/Section.style';
import { MarkdownXl, Yellow } from '../../assets/css/Markdown.style';
import { media } from '../../assets/css/Media.style';
import { Color } from '../../assets/css/Theme.style';

const IndexContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.alignItems || 'center'};
  flex-direction: column;
  margin-bottom: ${(props) => props.mb || 0}px;
  background-color: ${(props) => props.bgColorPC};
  ${media.md`
        margin-bottom:80px;
    `}
  ${media.sm`
        margin-bottom:${(props) => Math.floor(props.mb / 2) || 0}px;
        background-color:${(props) => props.bgColorMobile}
    `}
`;
const IndexTitle = styled(MarkdownXl)`
  margin-bottom: 50px;
  text-align: ${(props) => props.textAlign || 'center'};
  ${media.sm`
         margin-bottom: 35px;
    `}
`;

const Index = () => {
  const [explain] = useState([
    {
      title: '아이디어 구체화',
      contents:
        '핵심목표에 대한 아이디어, 생각들을 확산하여<br/>구체화 할 때 아주 유용하게 활용할 수 있습니다.',
      img: 'note.svg'
    },
    {
      title: '모바일 환경 제공',
      contents:
        '웹뿐만 아니라 모바일에서도 이용할 수 있습니다.<br/>하지만, 저는 웹을 권장합니다.',
      img: 'mobile.svg'
    },
    {
      title: '온오프라인 만다라트',
      contents:
        '온라인에서 작성한 만다라트를 인쇄해보세요.<br/>오프라인에서도 만다라트를 즐길 수 있습니다.',
      img: 'onoffline.svg'
    }
  ]);

  return (
    <>
      <ReactHelmet
        title="만다라트 | 나만의 만다라트를 만들어 계획을 실천하세요"
        description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
        keywords="만다라트(mandal art) 사이트로 플랜(plan) 도구를 만나보세요! 나만의 만다라트를 만들어 성공 목표를 세워보세요."
      />

      <BackgroundSection img={require('../../assets/img/index.jpg')}>
        <IndexContainer
          alignItems="start"
          bgColorMobile={Color.blue300}
          mb={100}
        >
          <IndexTitle textAlign="left" fontWeight={400} color={Color.white}>
            함께, <Yellow>계획</Yellow>을 세워요
            <br />
            지금 바로 시작하세요
          </IndexTitle>
          <Write />
        </IndexContainer>

        <IndexContainer alignItems="space-between" mb={100}>
          <Explain explain={explain} />
        </IndexContainer>

        <IndexContainer bgColorPC={Color.blue300}>
          <IndexTitle fontWeight={400} color={Color.white}>
            이제 시작해볼까요?
            <br />
            함께, <Yellow>만다라트</Yellow>를 만들어요
          </IndexTitle>
          <Write />
        </IndexContainer>
      </BackgroundSection>
    </>
  );
};

export default Index;
