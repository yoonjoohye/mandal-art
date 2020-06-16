import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {MarkdownLg, MarkdownMd, MarkdownBase} from "../../assets/css/Markdown.style";
import {media} from "../../assets/css/Media.style";
import {Color} from "../../assets/css/Theme.style";
import {FlexBox, OnlyPc} from "../../assets/css/Section.style";

const BannerSection = styled.section`
    background-color: #4093fb;
    border-radius: 1rem;
    box-shadow: 0 10px 0 #1a63ee; 
    width: 100%;
    margin-bottom:${props => props.mb}px;
    @media(max-width:480px){
        margin-bottom:${props => Math.floor(props.mb / 2)}px;
    }
`;
const BannerContainer = styled.div`
    padding:2rem 4rem;
    ${FlexBox(props => props.justifyContent)};
`;
const Pc = styled.div`
  ${OnlyPc};
`
const BannerTitle = styled(MarkdownLg)`
  ${media.sm`
      width:100%;
      text-align:center;
  `}
`;
const Name = styled(MarkdownMd)`
  text-align:center;
`;
const Email = styled(MarkdownBase)`
  text-align:center;
`;

const Banner = (props) => {
    const [ad, setAd] = useState(false);
    const [title, setTitle] = useState('');
    const [user, setUser] = useState([]);

    useEffect(() => {
        setAd(props.ad);
        setTitle(props.title);
        setUser(props.user);
    }, [props]);
    return (
        <BannerSection mb={50}>
            <BannerContainer justifyContent={ad ? 'center' : 'space-between'}>
                <BannerTitle fontWeight={400} color={Color.white} dangerouslySetInnerHTML={{__html: title}}/>
                {
                    !ad ?
                        <Pc>
                            <Name color={Color.white}>{user.displayName}</Name>
                            <Email color={Color.white}>{user.email}</Email>
                        </Pc> :
                        null
                }

            </BannerContainer>
        </BannerSection>
    )
}

export default Banner;