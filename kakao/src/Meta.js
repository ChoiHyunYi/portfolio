/**
 * @filename: Meta.js
 * @description: <head>태그 내의 SEO 처리 및 기본 참조 리소스 명시
 * @author: Choi Hyun Yi (hyun22378@gmail.com)
 */
import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";

import sample from './assets/img/sample.png';

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
                <meta property='og:image' content={props.image} />
                <link rel='shortcut icon' href={props.image} type='image/png' />
                <link rel='icon' href={props.image} type='image/png' />

            </Helmet>
        </HelmetProvider>
    );
};


Meta.defaultProps = {
    title: 'React Open API 연동',
    description: 'React로 만든 Redux활용 카카로 검색 OpenAPI 연동 예제입니다.',
    keywords: 'React, Redux, Kakao, OpenAPI',
    author: '최현이',
    image: sample,
    url: window.location.href
};

export default Meta;