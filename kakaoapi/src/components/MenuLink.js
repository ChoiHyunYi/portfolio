import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* 메뉴링크 -> NavLink : 현재 머물고 있는 페이지와 관련된 링크에 CSS 적용 */
const MenuLinkContainer = styled(NavLink)`
    font-size: 20px;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 2px;
    color: #222;

    /* CSS의 가상클래스 hover */
    &:hover {
        color: #22b8cf;
    }

    &:after {
        content: '|';
        display: inline-block;
        padding: 0 7px;
        color: #ccc;
    }

    &:last-child {
        &:after {
            /* 글자색을 흰색으로 지정하여 화면에서 숨긴다. */
            color: #fff;
        }
    }

    /*
        URL이 현재 메뉴를 가르키는 경우 (콜론이 아닌 점에 주의)
        활성 메뉴에 적용되는 기본 클래스 이름이 'active'이다.
    */
    &.active {
        text-decoration: underline;
        color: #22b8cf;

        &:after {
            /* 흰색 선을 추가하여 .active에서 지정한 border를 덮을 수 있도록 지정한다. (가림 효과) */
            border-bottom: 4px solid #fff !important;
        }
    }
`;
const MenuLink = ({to, children}) => <MenuLinkContainer to={to}>{children}</MenuLinkContainer>

// React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
export default React.memo(MenuLink);