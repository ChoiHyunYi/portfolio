import React from "react";
import styled from 'styled-components';
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const EventStyle = styled.div`
    width: 1200px;
    margin: auto;

    h3 {
        text-align: center;
        padding: 80px 0 55px 0;
    }

    >div {
        padding-bottom: 50px;

        .swiper-slide {
            >div {
                width: 100%;

                img:nth-child(1) {
                    width: 100%;
                    border: 1px solid #eaeaea;
                }
            }

            img:nth-child(2) {
                margin: 18px 0 8px;
            }

            p {
                color: #2f231c;
                margin-bottom: 18px;
                font-size: 17px;
            }

            span {
                display: block;
                font-size: 13px;
                margin: 16px 0;
                font-weight: 100;
                color: #948780;
            }
        }

        .swiper-pagination {
            width: 100%;
        }
        .swiper-pagination-bullet {
            margin: 0 12px !important;
            width: 6px;
            height: 6px;
            background-color: #cdccd5;
            opacity: 1;

            &:hover {
                background: #301d17;
                width: 8px;
                height: 8px;
            }
        }

        .swiper-pagination-bullet-active {
            background: #301d17;
            width: 8px;
            height: 8px;
        }
    }
    p {
        display: block;
        height: 73px;
        width: 100%;
    }

`;

const Event = () => {
    const [Data, setData] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:3001/event');
                setData(response.data);
            } catch (e) {
                console.error(e);
                alert('연동 실패')
            }
        })();
    }, []);

    return (
        <EventStyle>
            <h3>
                <img src='./img/h_event.png' alt='BrEvent'/>
            </h3>
            <Swiper
                modules={[Pagination]}
                slidesPerView={4} // 동시에 보여줄 슬라이드 개수
                spaceBetween={17}  // 슬라이드간 간격
                slidesPerGroup={4}  // 그룹으로 묶을 수, slidesPerView와 같은 값을 지정하는 게 좋음
                pagination={{clickable: true}}
                >
                    {Data.map((v, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div>
                                    <div>
                                        <img src={v.src} alt={v.alt} />
                                    </div>
                                    <img src={v.stit} />
                                    <p>{v.comment}<span>상시진행</span></p>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            <p></p>
        </EventStyle>
    );
};

export default Event;