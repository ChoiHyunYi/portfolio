import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StoreOrder = styled.div`
    width: 100%;

    div {
        width: 1200px;
        margin: auto;

        .flex {
            display: flex;
            /* flex-direction: row; */

            div {
                width: 50%;
                text-align: center;

                h3 {
                    margin: 95px 0 50px 0;
                }
            }
        }
    }
`;

const Store = () => {
    return (
        <StoreOrder>
            <div>
                <div className='flex'>
                    <div>
                        <h3>
                            <img src='./img/h_store.png' alt='title' />
                        </h3>
                        <Link to='/'>
                            <img src='./img/img_store.jpg' alt='image' />
                        </Link>
                    </div>
                    <div>
                        <h3>
                            <img src='./img/h_happyorder_delivery.png' alt='title'/>
                        </h3>
                        <Link to='/'>
                            <img src='./img/img_happyorder_delivery.png' alt='image'/>
                        </Link>
                    </div>
                </div>
            </div>
        </StoreOrder>
    );
};

export default Store;