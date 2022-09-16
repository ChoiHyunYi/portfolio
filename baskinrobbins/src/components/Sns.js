import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

const SnsStyle = styled.div`
    width: 100%;
    div {
        width: 1200px;
        margin: auto;

        .sns {
            text-align: center;

            h3 {
                margin: 121px 0 37px 0;
            }

            div {
                margin-bottom: 35px;

                a {
                    padding: 0 9px;
                }
            }
        }

        .titSns {
            width: 100%;

            >h3 {
                width: 100%;
                height: 1px;
                background-color: #dcd7d1;
                margin: 61px 0 26px;
                position: relative;

                img {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }

        .instaImage {
            width: 100%;
            margin: auto;
            padding: 10px 0 200px 0;
            display: block;

            ul {
                margin-top: 20px;
                width: 100%;
                /* box-sizing: border-box; */

                li {
                    float: left;
                    width: 20%;
                    height: 237px;
                    padding: 1.5px;
                    box-sizing: border-box;

                    a {
                        width: 100%;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }

                &::after {
                    content: '';
                    clear: both;
                    float: none;
                    display: block;
                }
            }
        }
    }
`;

const Sns = () => {

    const [InstaData, setInstaData] = React.useState([]);

    React.useEffect(()=> {
        (async() => {
            try {
                const response = await axios.get('http://localhost:3001/instagram');
                setInstaData(InstaData => response.data);
            } catch (e) {
                console.error(e);
                alert('연동 실패');
            }
        })();
    }, []);

    return (
        <SnsStyle>
            <div>
                <div className='sns'>
                    <h3>
                        <img src='./img/h_sns.png' alt='sns' />
                    </h3>
                    <div>
                        <Link to='/'>
                            <img src='./img/sns_facebook.png' alt='facebook' />
                        </Link>
                        <Link to='/'>
                            <img src='./img/sns_twitter.png' alt='twitter' />
                        </Link>
                        <Link to='/'>
                            <img src='./img/sns_blog.png' alt='blog' />
                        </Link>
                        <Link to='/'>
                            <img src='./img/sns_instagram.png' alt='instagram' />
                        </Link>
                        <Link to='/'>
                            <img src='./img/sns_youtube.png' alt='youtube' />
                        </Link>
                    </div>
                </div>
                <div className='titSns'>
                    <h3>
                        <Link to='/'>
                            <img src='./img/tit_sns.png' alt='instagram' />
                        </Link>
                    </h3>
                </div>
                <div className='instaImage'>
                    <ul>
                        {InstaData.map((v, i) => {
                            return (
                                <li key={i}>
                                    <Link to='/'>
                                        <img src={v.src} alt={`instaImage${i}`} />
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </SnsStyle>
    );
};

export default Sns;