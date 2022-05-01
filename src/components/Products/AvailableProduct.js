import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ProductItem from './ProductItem';


const AvailableProduct = (props) => {
    const cart = useSelector((state) => state.cart);

    const productList = cart.map((prod) => (
        <ProductItem
            id={prod.id}
            key={prod.id}
            image={prod.image}
            description={prod.description}
            price={prod.price}
            name={prod.name}
        />
    ));

    return(
        <Root>
            <ProductList>
                {productList}
            </ProductList>
        </Root>
    )
}

const Root = styled.div`
display: flex;
justify-content: center;
`

const ProductList = styled.ul`
display: grid;
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr;
grid-row-gap: 10rem;
grid-column-gap: 10rem;
margin: 0px;
padding: 0px;
padding-top: 10px;
`


export default AvailableProduct;

