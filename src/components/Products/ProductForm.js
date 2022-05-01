import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuantity } from '../../slices/cartSlice';
import styled from 'styled-components';

import Input from '../UI/Input';

const ProductForm = props => {

    const dispatch = useDispatch();

    const [amountIsValid, setAmountIsValid] = useState(true)

    const [qty, setQty] = useState(1);

    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();
        console.log(qty);
    };

    return(
        <Form>
            <Input
                ref = {amountInputRef}
                label="Amount"
                value={qty}
                handleChange={e => setQty(e.target.value)}
                input={{
                    id:'amount_' + props.id,
                    type:'number',
                    min:'1',
                    max:'5',
                    step:'1',
                    defaultValue:'1'
                }} />
            <Add onClick={(_) => dispatch(addQuantity({id: props.id, qty: qty}))}>+ Add</Add>
            {!amountIsValid && <p>Please enter correct amount</p>}
        </Form>
    )
};

const Form = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Add = styled.button`
    border: none;
    cursor: pointer;
    font:inherit;
    background-color: white;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    border-radius: 6px;
    font-size: 0.9rem;

    &:hover {
        background-color: #8a2b06;
        color: white; 
    }
`;


export default ProductForm;