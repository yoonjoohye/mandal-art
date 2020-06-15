import React, {useState} from "react";
import styled from "styled-components";
import {OnlyMobile} from "../../assets/css/Section.style";
import {MarkdownBase, MarkdownSm} from "../../assets/css/Markdown.style";
import {media} from "../../assets/css/Media.style";
import {Color} from "../../assets/css/Theme.style";
import {fadeIn} from "../../assets/css/Animate.style";

const Mobile = styled.div`
  ${OnlyMobile};
`
const AlertButton = styled(MarkdownBase)`
  margin-bottom:20px;
  text-align:right;
  ${media.sm`
    margin-bottom:10px;
  `}
`
const SpeechBubble = styled.div`
  animation: ${fadeIn} 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  position: absolute;
  left:5%;
  right:5%;
  padding:1rem;
  background: ${Color.blue300};
  border:0;
  border-radius: 0.3rem;
  &:after, &:before {
    bottom: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: transparent;
    border-bottom-color: ${Color.blue300};
    border-width: 11px;
    margin-left: 30.4%;
  }
`;
const SpeechBubbleContent = styled(MarkdownSm)`
    text-align:center;
    word-break: keep-all;
`
const Alert = () => {
    const [showBubble, setShowBubble] = useState(false);

    const onShowBubble = () => {
        setShowBubble(!showBubble);
    }
    return (
        <Mobile>
            <AlertButton color={Color.gray300} onClick={onShowBubble}>ⓘ 로그인이 작동하지 않나요?</AlertButton>
            {
                showBubble &&
                <SpeechBubble>
                    <SpeechBubbleContent color={Color.white}>
                        인앱브라우저는 소셜 로그인을 제공하지 않습니다.<br/>
                        <b>더보기(…)</b>에서 <b>다른 브라우저로 열기</b>를 선택하셔서 로그인을 다시 시도해주세요!
                    </SpeechBubbleContent>
                </SpeechBubble>
            }
        </Mobile>
    );
}
export default Alert;