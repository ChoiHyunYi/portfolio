import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterStyle = styled.div`
    width: 100%;
    height: 335px;
    padding-bottom: 60px;
    border-top: 1px solid #feaf28;

    >div {
        position: relative;

        &:first-child {
            width: 1100px;
            margin: auto;

            ul {
                height: 77px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                li {
                    
                    a {
                        color: #726454;
                        font-size: 14px;
                        text-decoration: none;
                        padding-left: 58px;
                        
                        
                    }

                    .infor {
                        font-weight: bold;
                        color: #ff7c98;
                        
                    }
                }
            }
        }

        &:nth-child(2) {
            background-color: #f9f8f7;
            height: 75px;
            width: 100%;

            >div {
                width: 785px;
                height: 100%;
                margin: auto;

                ul {
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    li {
                        align-items: center;

                        &:nth-child(4) {
                            display: flex;
                            align-items: center;

                            a {
                                &:nth-child(2) {
                                    img {
                                        width: 31px;
                                        height: 31px;
                                        padding: 10px;
                                    }
                                }
                            }
                        }
                    }

                    .FooterButton {
                        background: url(./img/family_size_on.png) no-repeat right;
                        background-color: #fff;
                        box-shadow: 2px 2px 5px #e8e8e8;
                        width: 145px;
                        height: 32px;
                        text-align: left;
                        font-size: 11px;
                        padding-left: 11px;
                        border: 1px solid #d1cecc;
                        border-radius: 5px;
                        color: #b1ab9f;
                    }

                    button {
                        background: url(./img/family_size_off.png) no-repeat right;
                        background-color: #fff;
                        box-shadow: 2px 2px 3px #e8e8e8;
                        width: 145px;
                        height: 32px;
                        text-align: left;
                        font-size: 11px;
                        padding-left: 11px;
                        border: 1px solid #d1cecc;
                        border-radius: 5px;
                        color: #b1ab9f;
                    }
                }
            }
        }

        &:nth-child(3) {

            ul {
                width: 145px;
                padding: 10px 0;
                background: #fff;
                border: 1px solid #d1cecc;
                border-radius: 5px 5px 0 0;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(167%,-20%);
                display: flex;
                flex-direction: column;

                li {
                    display: block;
                    padding-left: 15px ;
                    font-size: 13px;
                    color: #726454;
                    line-height: 25px;
                    
                    &:hover {
                        background:#efefef;
                    }
                }
            }
        }

        &:nth-child(4) {
            width: 570px;
            margin: auto;
            text-align: center;

            div {

                &:nth-child(1) {
                    padding: 48px 0 33px 0;
                }

                &:nth-child(2) {
                    display: flex;
                    justify-content: space-between;
                    

                    p {
                        color: #635b56;
                        font-size: 11px;
                        margin-bottom: 8px;
                        margin-left: 15px;
                    }
                }

                &:nth-child(3) {
                    display: flex;
                    justify-content: center;

                    p {
                        color: #635b56;
                        font-size: 11px;
                        margin-left: 15px;
                    }
                }
            }
            
            address {
                font-size: 12px;
                color: #b1adab;
                margin-top: 15px;
                padding-top: 9px;
                letter-spacing: -0.4px;
                font-weight: 200;
            }
        }
    }
`;

const Footer = () => {

    const [SiteBtn,setSiteBtn] = React.useState(false);

    const BtnClick = React.useCallback( e => setSiteBtn(SiteBtn =>!SiteBtn),[SiteBtn])

    return (
        <FooterStyle>
            <div>
                <ul>
                    <li>
                        <Link to='/'>점포개설문의</Link>
                        <Link to='/'>채용문의</Link>
                        <Link to='/'>윤리신고센터</Link>
                        <Link to='/'>이용약관</Link>
                        <Link to='/' className='infor'>개인정보처리방침</Link>
                        <Link to='/'>영상정보처리기기운영관리방침</Link>
                        <Link to='/'>거래희망회사 사전등록</Link>
                    </li>
                </ul>
            </div>
            <div>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>
                                <img src='./img/btn_happypoint.png' alt='HappyPoint'/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <img src='./img/btn_happymarket.png' alt='HappyMarket'/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <img src='./img/btn_spc_story.png' alt='spcStory'/>
                            </Link>
                        </li>

                        <li>
                            <Link to='/'>
                                <img src='./img/btn_norton.gif' alt='norton'/>
                            </Link>
                            <Link to='/'>
                                <img src='./img/btn_ccm_2.png' alt='ccm'/>
                            </Link>
                            <Link to='/'>
                                <img src='./img/btn_ksa.png' alt='ksa'/>
                            </Link>
                        </li>

                        <li>
                            <button type='button' onClick={BtnClick} className={SiteBtn ? "FooterButton" : ''}>FAMILY SITE</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                {SiteBtn ? (
                    <ul>
                        <li>배스킨 스쿨</li>
                        <li>SPC그룹사이트</li>
                        <li>SPC MAGAZINE</li>
                        <li>BR코리아</li>
                        <li>해피포인트카드</li>
                        <li>파스쿠찌</li>
                        <li>삼립</li>
                        <li>파리바게트</li>
                        <li>던킨도너츠</li> 
                    </ul>
                ) : ('')}
            </div>
            <div>
                <div>
                    <img src='./img/footer_logo.png' alt='footerLogo'/>
                </div>
                <div>
                    <p>사업자 등록번호 : 303-81-09535</p>
                    <p>비알코리아(주) 대표이사 도세호</p>
                    <p>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</p>
                </div>
                <div>
                    <p>TEL : 080-555-3131</p>
                    <p>개인정보관리책임자 : 김경우</p>
                </div>
                <address>Copyright &copy; 2016 BRKOREA Company. All Rights Reserved.</address>
            </div>
        </FooterStyle>
    );
};

export default Footer;