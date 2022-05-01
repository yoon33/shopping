import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const HeaderCartButton = (props) => {

    const cart = useSelector((state) => state.cart);

    const totalQuantity = cart.map((prod) => prod.qty).reduce((accum, curr) => accum + curr);

    useEffect(() => {
        console.log(totalQuantity);
    },[cart])

    return(
        <Button onClick={props.handleClick}>
            <span>My shopping Basket</span>
            <Badge>{totalQuantity}</Badge>
        </Button>
    )
};

const Button = styled.button`
    cursor: pointer;
    font:inherit;
    border: none;
    color: black;
    display:flex;
    justify-content:space-around;
    align-items: center;
    background-color: white;
`;

const Badge = styled.div`
    background-color: #DCDCDC;
    padding: 0.25rem 0.5rem;
    border-radius: 25px;
    margin-left: 0.5rem;
    font-weight: bold;
    color:white;
`;

export default HeaderCartButton;