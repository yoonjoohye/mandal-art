import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FlexBox, Section } from '../../assets/css/Section.style';
import Banner from '../../components/mypage/Banner';
import styled from 'styled-components';
import { media } from '../../assets/css/Media.style';
import ReactHelmet from '../../components/ReactHelmet';

const GuideWrapper = styled.div`
	${FlexBox('center')};
	flex-direction: column;
`;
const GuideBox = styled.div`
	${FlexBox((props) => props.justifyContent)};
	margin-bottom: 50px;
	${media.md`
    width:100%;
    flex-direction: column;
  `}
`;
const GuideList = styled.div`
	margin-bottom: 10px;
`;
const HighLight = styled.span`
	background-color: #fff7006b;
`;

const GuideImg = styled.img`
	max-width: 100%;
	width: 70%;
	height: auto;
	border-radius: 0.8rem;
	box-shadow: 5px 5px 15px #00000026;
	margin-right: 50px;
	${media.md`
    width: 100%;
    margin-right:0;
    margin-bottom:30px;
  `}
`;
const GuideContent = styled.div`
	width: 100%;
	text-align: left;
	margin-bottom: 30px;
`;

const Guide = () => {
	return (
		<>
			<ReactHelmet
				title="가이드 - 나만의 만다라트"
				description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
				keywords="만다라트(mandal art) 사이트로 플랜(plan) 도구를 만나보세요! 나만의 만다라트를 만들어 성공 목표를 세워보세요."
			/>
			<Section>
				<Container>
					<Banner ad={true} title="작성 시 주의사항" />
					<GuideWrapper>
						<GuideContent>
							<GuideList>
								<span aria-label="apple" role="img">
									🍎
								</span>
								달성하기 <HighLight>어려운 목표</HighLight>도 안 되지만, 너무
								쉬워서 <HighLight>동기부여가 안 되는 목표</HighLight>도{' '}
								<HighLight>삼가</HighLight>해야 합니다.
							</GuideList>
							<GuideList>
								<span aria-label="pineApple" role="img">
									🍍
								</span>
								<HighLight>핵심목표는 담대하게 작성</HighLight>해야 합니다.
								노력하면 이룰 수 있는 목표를 작성해야 합니다.
							</GuideList>
							<GuideList>
								<span aria-label="kiwi" role="img">
									🥝
								</span>
								<HighLight>세부목표는 현실적으로 작성</HighLight>해야 합니다.
							</GuideList>
							<GuideList>
								<span aria-label="cherry" role="img">
									🍒
								</span>
								<HighLight>간단 명료하게 작성</HighLight>해야 합니다.
							</GuideList>
						</GuideContent>

						<GuideBox justifyContent="center">
							<GuideImg
								src={require('../../assets/img/mandal.jpg')}
								alt="만다라트-가이드 이미지"
							/>
							<GuideContent>
								<span className="font-medium">1.</span>{' '}
								<Link className="font-blue font-medium" to="/write">
									{' '}
									만다라트 만들기
								</Link>
								를 시작합니다.
								<br />
								<br />
								<span className="font-medium">2.</span> 자신의 핵심목표를 가장
								중심에 적습니다.(최대 24글자)
								<br />
								<br />
								<span className="font-medium">3.</span> 세부목표 8칸에
								핵심목표에 대한 해결점, 아이디어 등을 적습니다.
								<br />
								<br />
								<span className="font-medium">4.</span> 나머지 8칸에 세부목표에
								대한 해결점, 아이디어 등을 적습니다.
								<br />
								<br />
								<span className="font-medium">5.</span> 모두 채웠다면, 나만의
								만다라트 완성 💙
							</GuideContent>
						</GuideBox>
					</GuideWrapper>
				</Container>
			</Section>
		</>
	);
};

export default Guide;
