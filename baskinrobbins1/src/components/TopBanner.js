import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TbStyle = styled.div`
    width: 100%;
    background-color: #ffd825;
    margin-bottom: 3px;
    a {
        p {
        background: url(./img/1714824579.jpg) 50% 0  no-repeat;
        width: 100%;
        height: 150px;
        margin-bottom: 3px;
    }
}


`;

const TopBanner = () => {
    return (
        <TbStyle>
                <Link to='/'>
                    <p></p>
                </Link>
        </TbStyle>
    );
};

export default TopBanner;