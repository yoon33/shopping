import React, { useEffect } from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';

const Cart = (props) => {

    const cart = useSelector((state) => state.cart);

    const navigate = useNavigate();

    const goToCheckout = _ => {
        navigate("/checkout");
    }

    return(
        <CartsItemContainer className={props.className}>
            {cart.filter(prod => prod.qty > 0).map(prod => <CartItem key={prod.id} id={prod.id} name={prod.name} price={prod.price} qty={prod.qty}/>)}
            <Total>
                <span>Order Subtotal</span>
                <span>${cart.map((prod) => prod.price * prod.qty).reduce((accum, curr) => accum + curr).toFixed(2)}</span>
            </Total>
            <CheckOut onClick={goToCheckout}>View Shopping Bag</CheckOut>
        </CartsItemContainer>
    )
};

const CartsItemContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
`;

const Badge = styled.div`
    background-color: #DCDCDC;
    padding: 0.25rem 0.5rem;
    border-radius: 25px;
    margin-left: 0.5rem;
    font-weight: bold;
    color:white;
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 1rem 0;
    gap: 1rem;
`;

const CheckOut = styled.div`
    font: inherit;
    font-weight: bold;
    font-size: 1rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    padding: 1rem;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.7rem;

    &:hover {
        background-color: #8a2b06;
        color: white; 
    }

    &:active{
        background-color: #8a2b06;
        color: white;
    }
`;



export default Cart;