import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const BannerStyle = styled.div`
    .swiper-slide {
        height: 697px;

        .slide {
            width: 100%;
            display: flex;

            div {
                margin: auto;
            }
        }
    }

    .swiper-button-next {
        background: url(./img/btn_banner_next.png) no-repeat;
        background-position: center;
        width: 109px;
        height: 109px;
        margin-right: 12px;
    }

    .swiper-button-prev {
        background: url(./img/btn_banner_prev.png) no-repeat;
        background-position: center;
        width: 109px;
        height: 109px;
        margin-left: 12px;
    }

    .swiper-button-next::after, .swiper-button-prev::after {
        display: none;
    }

    .swiper-pagination {
        width: 100%;
    }

    .swiper-pagination-bullet {
        background-color: #fff;
        opacity: 1;
        margin: 13px 12px !important;
        width: 10px;
        height: 10px;
        &:hover {
            width: 12px;
            height: 12px;
            background: #301d17;
            transition: all 0.3s;
        }
    }

    .swiper-pagination-bullet-active {
        background: #301d17;
        width: 12px;
        height: 12px;
    }
`;

const Banner = () => {
    const [Data, setData] = React.useState([]);

    React.useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:3001/banner');
                setData(response.data);
            } catch (e) {
                console.error(e);
                alert('연동 실패')
            }
        })();
    }, []);

    return (
        <BannerStyle>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}  // 동시에 보여줄 슬라이드 개수
                navigation  //
                autoplay={{ delay: 4000}}  // 슬라이드 자동 여부
                loop={true} // true : 각 슬라이드 반복, false : 한 사이클만 작동하고 멈춤
                pagination={{ clickable: true }}
            >

                {Data.map((v, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className='slide' style={{background:`${v.background}`}}>
                                <div>
                                    <img src={v.src} alt={v.alt} />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </BannerStyle>
    )
};

export default Banner;