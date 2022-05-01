import React from 'react';
import styled from 'styled-components';
import CartItem from '../Cart/CartItem';
import { useSelector } from 'react-redux';
import Input, {Option} from '../UI/Input';

const CheckOut = (props) => {
    const cart = useSelector((state) => state.cart);

    return (
    <Root>
        <Basket>
            {cart.filter(prod => prod.qty > 0).map(prod =><CartSummary key={prod.id} id={prod.id} name={prod.name} price={prod.price} qty={prod.qty}/>)} 
            <Total>
                <span>Order Subtotal</span>
                <span>${cart.map((prod) => prod.price * prod.qty).reduce((accum, curr) => accum + curr).toFixed(2)}</span>
            </Total>        
        </Basket>
        <OrderSummary>
            <H3>Payment Info</H3>
            <PayInput input="text" label="First Name"/>
            <PayInput input="text" label="Last Name"/>
            <PayInput input="text" label="Email"/>
            <Options label="Country" id="Country" values={["United States", "Canada", "South Korea"]}/>
        </OrderSummary>
    </Root>
    );
}

const Root = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2rem;
`;


const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 1rem 0;
    width: 70%;
`;

const OrderSummary = styled.div`
    font-weight: bold;
    padding-top: 20px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

const PayInput = styled(Input)`
    color: #363636;
    width: 70%;
    display: flex;
    justify-content: space-between;
`;

const Options = styled(Option)`
    color: #363636;
    width: 70%;
    display: flex;
    justify-content: space-between;
`;


const H3 = styled.div`
    font-size: 1.5rem;
    color: #363636;
`;

const CartSummary = styled(CartItem)`
    display: grid;
    grid-column: first;
    grid-row: auto;
    grid-column: auto;
    border-bottom: none;
`;

const Basket = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`

export default CheckOut;