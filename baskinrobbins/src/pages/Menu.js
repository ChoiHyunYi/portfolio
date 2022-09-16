import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const MenuStyle = styled.div`
    width: 100%;
    height: 1157px;
    background: url(./img/bg_menu.jpg) 50% 0 no-repeat;

    >div {
        background: url(./img/img_menu_list_220429.png) no-repeat 50% 100%;
        margin: auto;
        width: 1200px;
        height: 1066px;
        position: relative;

        img {
            position: relative;
            left: 50%;
            top: 78px;
            transform: translate(-50%,0);
        }
        
        .iceCream {
            position: absolute;
            top: 17%;
            left: 27%;

            div {
                width: 396px;
                height: 301px;
                text-indent: -9999em;
            }
        }

        .iceCreamCake {
            position: absolute;
            top: 17%;
            left: 63%;

            div{
                width: 278px;
                height: 473px;
                text-indent: -9999em;
            }
        }

        .beverage {
            position: absolute;
            top: 48%;
            left: 10%;

            div{
                width: 235px;
                height: 372px;
                text-indent: -9999em;
            }
        }

        .coffee {
            position: absolute;
            top: 48%;
            left: 32%;

            div{
                width: 335px;
                height: 300px;
                text-indent: -9999em;
            }
        }

        .gift {
            position: absolute;
            top: 64%;
            left: 63%;

            div{
                width: 280px;
                height: 300px;
                text-indent: -9999em;
            }
        }

        .dessert {
            position: absolute;
            top: 79%;
            left: 32%;

            div{
                width: 340px;
                height: 190px;
                text-indent: -9999em;
            }
        }
    }
`;

const Menu = () => {
    return (
        <MenuStyle>
            <div>
                <img src='./img/h_menu.png' alt='Menu' />
                <Link to='/' className='iceCream'>
                    <div>iceCream</div>
                </Link>
                <Link to='/' className='iceCreamCake'>
                    <div>iceCreamCake</div>
                </Link>
                <Link to='/' className='beverage'>
                    <div>beverage</div>
                </Link>
                <Link to='/' className='coffee'>
                    <div>coffee</div>
                </Link>
                <Link to='/' className='gift'>
                    <div>gift</div>
                </Link>
                <Link to='/'className='dessert'>
                    <div>dessert</div>
                </Link>
            </div>
        </MenuStyle>
    );
};

export default Menu;