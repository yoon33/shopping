import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../slices/cartSlice';

const CartItem = props => {
    const price = `$${props.price.toFixed(2)}`;

    const dispatch = useDispatch();

    return(
        <CartItemContainer className={props.className ?? ''}>
            <Case>
                <CartItemH2>{props.name}</CartItemH2>
                    <Summary>
                        <Price>{price}</Price>
                        <Amount>x{props.qty}</Amount>
                    </Summary>
            </Case>
            <Actions>
                <CartItemButton onClick={(_) => dispatch(removeItem(props.id))}>-</CartItemButton>
                <CartItemButton onClick={(_) => dispatch(addItem(props.id))}>+</CartItemButton>
            </Actions>
        </CartItemContainer>
    )
};

const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid #8a2b06;
    padding: 1rem 0;
    margin: 1rem 0;
    width: auto;
`;

const CartItemH2 = styled.h2`
    margin: 0 0 0.5rem 0;
    color: #363636;
`;

const Summary = styled.div`
    width: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

const Price = styled.span`
    font-weight: bold;
    color: #363636;
`;

const Amount = styled.span`
    font-weight: bold;
    border: 1px solid #ccc;
    padding: 0.25rem 0.75rem;
    border-radius: 6px;
    color: #363636;
`;

const Case = styled.div`
    display: flex;
    flex-direction: column;
`;

const Actions = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
          flex-direction: row;
        }
`;

const CartItemButton = styled.button`
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;

    &:hover {
        background-color: #8a2b06;
        color: white; 
    }

    &:active{
        background-color: #8a2b06;
        color: white;
    }
`;

export default CartItem;
