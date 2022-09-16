/**
 * @filename: index.js
 * @description: 프로그램 시작점.
 *               전역 스타일(GlobalStyles)과 전역 SEO 구성(Meta),
 *               라우팅 범위를 설정(BrowserRouter)하고 프로그램을 시작(App)
 * @author: Choi Hyun Yi (hyun22378@gmail.com)
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import Meta from './Meta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Meta />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);
