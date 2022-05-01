import React from 'react';
import styled from 'styled-components';

import ProductModal from './ProductModal';
import ProductForm from './ProductForm';

const ProductCard = props => {

    return (
        <CardModal>
            <Name>{props.name}</Name>
            <span>{props.description}</span>
            <span>{props.price}</span>
            <ProductForm id={props.id} />
            <Buttons>
                <Close onClick={(e) => props.onExit()}>Close</Close>
            </Buttons>
        </CardModal>
    )
}

const CardModal = styled(ProductModal)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border: none;
`;

const Name = styled.span`
    font-weight: bold;
`;

const Buttons = styled.div`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
`;

const Close = styled.button`
    border: none;
    cursor: pointer;
    font:inherit;
    background-color: white;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    border-radius: 6px;
    font-size: 1rem;

    &:hover {
        background-color: #8a2b06;
        color: white; 
    }
`;

export default ProductCard;