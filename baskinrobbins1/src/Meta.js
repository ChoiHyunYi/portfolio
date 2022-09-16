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
                {/* <meta property='og:image' content={props.image} /> */}

                {/* 웹폰트 적용을 위한 외부 리소스 참조 */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet"/> */}
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
                <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-gothic.css" rel="stylesheet" />
                <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-barun-gothic.css" rel="stylesheet" />
                {/* <link href='/path/to/NanumBarunGothic/nanumbarungothic.css' rel='stylesheet' type='text/css'/> */}
            </Helmet>
        </HelmetProvider>
    );
};

/**
 * props에 대한 기본값 설정
 * @type {{keywords: string, author: string, description: string, title: string, url: string}}
 */

Meta.defaultProps = {
    title: '배스킨라빈스',
    description: 'React로 구현한 배스킨라빈스 클론코딩 페이지 입니다.',
    keywords: 'BaskinRobbins',
    author: '최현이',
    // image: '기본이미지변수적용',
    url: window.location.href
};

export default Meta;