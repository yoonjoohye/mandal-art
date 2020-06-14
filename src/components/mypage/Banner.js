import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {MarkdownLg} from "../../assets/css/Markdown.style";

const BannerSection=styled.section`
    background-color: #4093fb;
    border-radius: 1rem;
    box-shadow: 0 10px 0 #1a63ee; 
    width: 100%;
    margin-bottom:${props=>props.mb}px;
    @media(max-width:480px){
        margin-bottom:${props=>Math.floor(props.mb/2)}px;
    }
`;
const BannerContainer=styled.div`
    padding:2rem 4rem;
    display:flex;
    justify-content: ${props=>props.justifyContent};
    align-items:center; 
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
        <BannerContainer justifyContent={ad?'center':'space-between'}>
            <MarkdownLg className="w-100-m text-center-m" dangerouslySetInnerHTML={{__html: title}}></MarkdownLg>
                {/*<div className="w-100-m text-center-m font-lg font-white" dangerouslySetInnerHTML={{__html: title}}></div>*/}
                {
                    !ad ?
                        user &&
                        <div className="only-pc">
                            <div className="font-lg text-center font-white">{user.displayName}</div>
                            <div className="font-sm-m text-center font-white">{user.email}</div>
                        </div>:
                        null
                }

        </BannerContainer>
        </BannerSection>
    )
}

export default Banner;