import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
import {Button} from "../../assets/css/Button.style";
import {Color} from "../../assets/css/Theme.style";
import {media} from "../../assets/css/Media.style";

const WriteButton = styled(Button)`
    font-size: 30px;
    padding: 1rem 2rem;
    background-color: ${Color.pink200};
    color: ${Color.white};
    &:hover {
        background-color: ${Color.pink400};
    }
    ${media.sm`
        font-size: 15px;
        padding: 0.7rem 2rem;
    `}
`;

const Write = () => {
    return (
        <Link to="/write">
            <WriteButton>시작하기</WriteButton>
        </Link>
    );
}


export default Write;