import React, {useState} from 'react';
import ProductModal from '../Products/ProductModal';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../../slices/userSlice';

const LogInModal = (props) => {

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const [userName, setUserName] = useState(user.name);
    const [password, setPassword] = useState(user.password);

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const submitChange = (e) => {
        if(userName.includes("@") && password.length > 6) {
            dispatch(login({name: userName, password: password}));
        }
        else {
            alert("Something is wrong with your username or password. Please try again.")
        }
    }

    return (
        <Root>
            <p>Welcome</p>
            <LogInInfo>
                <LogInStuff type="text" onChange={updateUserName} placeholder="Username"/>
                <LogInStuff type="password" onChange={updatePassword} placeholder="Password"/>
            </LogInInfo>
            <SubmitButton onClick={submitChange}>Submit</SubmitButton>
        </Root>
    )


}

const Root = styled(ProductModal)`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const LogInInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
`;

const LogInStuff = styled.input`
    color: black;
    border-radius: 6px;
    border: 1px solid #DCDCDC;
`;

const SubmitButton = styled.button`
    border: none;
    font:inheirt;
    background-color: white;
    cursor: pointer;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    border-radius: 6px;

    &:hover {
        background-color: #8a2b06;
        color: white; 
    }
`;



export default LogInModal;