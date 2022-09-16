import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TopDiv = styled.div`
    background: url(./img/bg_header.gif) 50% 0 repeat-x;
    width: 100%;
    border-top: 3px solid #ff7c98;
    border-bottom: 1px solid #3f291a;
    height: 136px;
    border-bottom: 1px solid #e2d9d6;

    div {
        position: relative;
        margin: auto;
        height: 100%;
        width: 1200px;

        .logo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .sns {
            top: 50%;
            left: 0;
            position: absolute;
            transform: translate(0, -50%);

            li {
                float: left;
                padding-right: 10px;
            }
        }

        .etc {
            top: 39px;
            right: 0;
            height: 54px;
            line-height: 54px;
            position: absolute;

            li {
                float: left;
                padding-left: 20px;
                font-size: 11px;

                a {
                    color: #4a3d39;
                    text-decoration: none;
                }
            }
        }
    }
`;

const Menu = styled.div`
    width: 100%;
    z-index: 99999;
    height: 46px;
    border-bottom: 1px solid #693337;

    >div {
        width: 1200px;
        display: flex;
        margin: auto;
        height: 100%;

        >ul {
            flex-grow: 1;
            display: flex;
            height: 100%;
            z-index: 999999;

            li {
                &:first-child {
                    padding-right: 23px;

                    span {
                        display: block;
                        text-indent: -9999em;
                        width: 35px;
                        background: url(./img/gnb_menu.png);
                        background-position: 0px -1px;
                        height: 100%;
                    }
                }

                &:last-child {
                    padding: 0 23px;
                    span {
                        display: block;
                        text-indent: -9999em;
                        width: 27px;
                        background: url(./img/gnb_menu.png);
                        background-position: -97px -1px;
                        height: 100%;
                    }
                }
            }
        }

        .event {
            ul {
                height: 100%;
                display: flex;

                li {
                    height: 100%;

                    span {
                        display: block;
                        height: 100%;
                        background: url(./img/gnb_menu.png);
                        text-indent: -9999px;
                    }
                    &:first-child {
                        padding-right: 59px;
                        span {
                            width: 164px;
                            background-position: -133px -3px;
                        }
                    }
                    &:nth-child(2) {
                        padding: 0 59px;
                        span {
                            width: 42px;
                            background-position: -415px -3px;
                        }
                    }
                    &:nth-child(3) {
                        padding: 0 27.5px;
                        span {
                            width: 105px;
                            background-position: -545px -3px;
                        }
                    }
                    &:nth-child(4) {
                        padding: 0 59px;
                        span {
                            width: 42px;
                            background-position: -737px -3px;
                        }
                    }
                    &:nth-child(5) {
                        padding: 0 59px;
                        span {
                            width: 49px;
                            background-position: -897px -3px;
                        }
                    }
                    &:nth-child(6) {
                        padding-left: 59px;
                        span {
                            width: 49px;
                            background-position: -1056px -3px;
                        }
                    } 
                }
            } 
        }
    } 
`;


const MenuHover = styled.div`
    position: absolute;
    display: block;
    max-height: 275px;
    width: 100%;
    z-index: 1000;  //1001
    border-bottom: 1px solid #693337;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
    &.maxHeight {
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
    }

    >div {
        width: 1250px;
        max-height: 1250;
        margin: auto;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;

        div {
            &:nth-child(1) {
                a{
                    &:nth-child(1) {
                        img {
                            transform: translate(0,-50%);
                            &.maxHeight {
                                transition: all 0.1s ease;
                            }
                        } 
                    }
                    &:nth-child(2) {
                        img {
                            transform: translate(20%,0);
                            opacity: 1;
                            transition: opacity .8s ease-in-out;
                            &.maxHeight {
                                opacity: 0;
                                transition: all 0.1s ease;
                            }
                        } 
                    }
                }
            }

            &:nth-child(2) {
                display: flex;

                ul {
                    li {
                        font-size: 15px;
                        color: #7b7b7b;
                        padding: 14px 0;
                        font-weight: 100;
                        &:hover {
                            color: #ff7c98;
                        }
                    }
                    &:nth-child(1) {
                        transform: translate(-357%,0);
                    }
                    &:nth-child(2) {
                        transform: translate(-460%,0);
                    }
                    &:nth-child(3) {
                        transform: translate(-265%,0);
                    }
                    &:nth-child(4) {
                        transform: translate(-210%,0);
                    }
                    &:nth-child(5) {
                        transform: translate(-10%,0);
                    }
                }
            }
        }
    }
`;

const ModalStyled = styled.div`
    position: absolute;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    transform: translate(0, -180%);
    opacity: 0;
    z-index: 1002;

    &.Click {
        opacity: 1;
        transform: translate(0,0);
        transition: opacity 0.4s ease-in-out;
    }

    .inner {
        height: 213px;
        width: 1200px;
        margin: auto;
        padding: 25px 0;

        .content {
            width: 100%;
            height: 150px;
            tr {
                width: 100%;
                text-align: left;
                vertical-align: top;
                th {
                    width: 7%;
                    color: #2f231c;
                    padding-top: 8px;
                    font-size: 14px;
                    font-weight: 400;
                }

                td {
                    &:nth-child(2) {
                        width: 35%;

                        select {
                            margin-right: 14px;
                            border: 1px solid #d1cecc;
                            padding: 6px 6px;
                            color: #636363;
                            border-radius: 4px;
                            font-size: 13px;
                            
                            option {
                                width: 128px;
                                font-size: 13px;
                            }
                        }
                        input {
                            padding: 8px 80px 8px 10px;
                            background-color: #efefef;
                            border: none;
                        }
                    }

                    &:nth-child(4) {
                        width: 35%;

                        input {
                            width: 100%;
                            padding: 8px 1px 8px 10px;
                            background-color: #efefef;
                            border: none;
                        }
                        dt {
                            font-size: 13px;
                            color: #9c9c9c;
                            padding-bottom: 5px;
                            padding-top: 10px;
                        }
                        dd {
                            a {
                                font-size: 13px;
                                color: #ff7c98;
                                text-decoration: none;
                                padding-right: 11px;
                                padding-bottom: 5px;
                            }
                        }
                    }
                }
            }

            .check {
                label {
                    font-size: 13px;

                    input {
                        width: 15px;
                        height: 15px;
                        border: 1px solid #d1cecc;
                        vertical-align: middle;
                    }
                    &:nth-child(1) {
                        padding-right: 20px;
                    }
                    &:nth-child(2) {
                        padding-right: 20px;
                    }
                    &:nth-of-type(4) {
                        padding-right: 250px;
                    }
                    &:nth-of-type(5) {
                        padding-right: 32px;
                    }
                    &:nth-of-type(6) {
                        padding-right: 8px;
                    }
                    &:nth-of-type(7) {
                        padding-right: 22px;
                    }
                }
            }
        }

        button {
            width: 150px;
            height: 38px;
            border-radius: 35px;
            border: none;
            position: absolute;
            left: 50%;
            bottom: 22px;
            transform: translateX(-50%);
            background-color: #ff7c98;
            color: #fff;
        }
    }

`;

const Header = () => {

    const [HeaderHover, setHeaderHover] = React.useState(false);
    const MouseOver = React.useCallback( e => setHeaderHover(HeaderHover => true), [HeaderHover]);
    const MouseOut = React.useCallback ( e => setHeaderHover(HeaderHover => false), [HeaderHover]);

    const [ModalOn, setModalOn] = React.useState(false);
    const ClickSearch = React.useCallback(e => {
        setModalOn(ModalOn => !ModalOn);
    }, [ModalOn]);

    return (
        <div>
            <TopDiv>
                <div>
                    <Link to='/' className='logo'>
                        <img src='./img/logo_baskinrobbins.png' alt='logo' />
                    </Link>
                    <ul className='sns'>
                        <li>
                            <img src='./img/icon_facebook.png' alt='Facebook'/>
                        </li>
                        <li>
                            <img src='./img/icon_twitter.png' alt='Twitter'/>
                        </li>
                        <li>
                            <img src='./img/icon_blog.png' alt='Blog'/>
                        </li>
                        <li>
                            <img src='./img/icon_instagram.png' alt='Instagram'/>
                        </li>
                        <li>
                            <img src='./img/icon_youtube.png' alt='YouTube'/>
                        </li>
                    </ul>
                    <ul className='etc'>
                        <ul>
                            <li>
                                <Link to='/'>고객센터</Link>
                            </li>
                            <li>
                                <Link to='/'>CONTACT US</Link>
                            </li>
                            <li>
                                <img src={ModalOn ? './img/btn_search_close.gif' : './img/icon_search.png'} alt='Search' onClick={ClickSearch}/>
                            </li>
                        </ul>
                    </ul>
                </div>
            </TopDiv>

            <Menu>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>
                                <span>LOGIN</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <span>JOIN</span>
                            </Link>
                        </li>
                    </ul>
                    <div className='event' onMouseOver={MouseOver} onMouseLeave={MouseOut}>
                        <ul>
                            <li>
                                <Link to='/'>
                                    <span>FLAVOR OF THE MONTH</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <span>MENU</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <span>영양 성분 및 알레르기</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <span>EVENT</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <span>STORE</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <span>ABOUT</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Menu>
            
            <MenuHover className={HeaderHover ? (''):('maxHeight')} onMouseOver={MouseOver} onMouseLeave={MouseOut}>
                <div>
                    <div>
                        <Link to='/'>
                            <img src='./img/img_happypoint_app.jpg' alt='HappyPoint' className={HeaderHover ? (''):('maxHeight')} />
                        </Link>
                        <Link to='/'>
                            <img src='./img/img_monthly_fom_220429.png' alt='Monthly' className={HeaderHover ? (''):('maxHeight')} />
                        </Link>
                    </div>
                    <div>
                        <ul>
                            <li>아이스크림</li>
                            <li>아이스크림케이크</li>
                            <li>음료</li>
                            <li>커피</li>
                            <li>디저트</li>
                        </ul>

                        <ul>
                            <li>아이스크림</li>
                            <li>음료</li>
                            <li>커피</li>
                        </ul>

                        <ul>
                            <li>진행중이벤트</li>
                            <li>당첨자발표</li>
                        </ul>

                        <ul>
                            <li>매장찾기</li>
                            <li>고객센터</li>
                            <li>단체주문</li>
                        </ul>

                        <ul>
                            <li>공지사항</li>
                            <li>보도자료</li>
                            <li>채용정보</li>
                            <li>점포개설문의</li>
                            <li>CONTACT US</li>
                        </ul>
                    </div>
                </div>
            </MenuHover>

            <ModalStyled className={ModalOn ? ('Click') : ('')} onClick={ClickSearch}>
                <div className='inner'>
                    <table className='content'>
                        <tr>
                            <th>제품명</th>
                            <td>
                                <select>
                                    <option>전체</option>
                                    <option>아이스크림</option>
                                    <option>아이스크림케이크</option>
                                    <option>음료</option>
                                    <option>커피</option>
                                    <option>디저트</option>
                                    <option>block pack</option>
                                    <option>ready pack</option>
                                </select>
                                <input type='text' />
                            </td>
                            <th>해시태그</th>
                            <td>
                                <div>
                                    <input type='text' />
                                </div>
                                <div>
                                    <dl>
                                        <dt>&#183; 자주 찾는 해시태그</dt>
                                        <dd>
                                            <Link to='/'>#피카피카피카츄</Link>
                                            <Link to='/'>#피카츄초코바나나블라스트</Link>
                                            <Link to='/'>#쿨쿨잠만보밀키소다블라스트</Link>
                                            <Link to='/'>#고라파덕아이스크림콘</Link>
                                            <Link to='/'>#푸린아이스크림콘</Link>
                                            <Link to='/'>#포켓몬스터</Link>
                                        </dd>
                                    </dl>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>알레르기 성분</th>
                            <td className='check'>
                                <label><input type='checkbox' />계란</label>
                                <label><input type='checkbox' />대두</label>
                                <label><input type='checkbox' />돼지고기</label>
                                <label><input type='checkbox' />땅콩</label>
                                <label><input type='checkbox' />밀</label>
                                <label><input type='checkbox' />복숭아</label>
                                <label><input type='checkbox' />우유</label>
                                <label><input type='checkbox' />없음</label>
                            </td>
                        </tr>
                    </table>
                    <button>검색</button>
                </div>
            </ModalStyled>
        </div>
    );
};

export default Header;