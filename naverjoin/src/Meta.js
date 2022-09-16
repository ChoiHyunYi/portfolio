/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: Choi Hyun Yi (hyun22378@gmail.com)
 */
import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

/**
 * SEO 처리 컴포넌트
 * @param props
 * @returns {JSX.Element}
 */

const Meta = (props) => {
    return (
        <HelmetProvider>
            <Helmet>
                <meta charset="UTF-8" />
                <title>{props.title}</title>
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:url' content={props.url} />
            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string, url: string}}
 */

Meta.defaultProps = {
    title: '네이버 회원가입',
    description: 'React로 구현한 네이버 회원가입 클론코딩 페이지입니다.',
    keywords: 'Naver, Join',
    author: '최현이',
    url: window.location.href
};

export default Meta;