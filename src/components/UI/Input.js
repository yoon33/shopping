import React from 'react';
import styled from 'styled-components';

const Input = React.forwardRef((props, ref) => {
    return(
        <InputRoot className={props.className ?? ''}>
            <LabelFirst htmlFor={props.input.id}>{props.label}</LabelFirst>
            <InputTwo onChange={props.handleChange} ref={ref} {...props.input} />
        </InputRoot>
    )
});

export const Option = (props) => {
    return(
        <InputRoot className={props.className ?? ''}>
            <LabelFirst>{props.label}</LabelFirst>
            <select id={props.id} name={props.label}>
                {props.values.map((value) => <option value={value}>{value}</option>)}
            </select>
        </InputRoot>
    )
}

const InputRoot = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;
  
const LabelFirst = styled.label`
    font-weight: bold;
    margin-right: 1rem;
`;
  
const InputTwo = styled.input`
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
`;


export default Input;