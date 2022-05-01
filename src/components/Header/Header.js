import React, { useState } from 'react';
import styled from 'styled-components';

import HeaderCartButton from './HeaderCartButton';
import LogIn from './LogIn';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import {persistor} from '../../index';
import {useNavigate} from 'react-router-dom';

const Header = (props) => {

    const [hideDropdown, setHideDropdown] = useState(true);
    const navigate = useNavigate();

    const userName = useSelector(state => state.user).userName;

    const handleClick = (_) => {
        setHideDropdown(!hideDropdown);
    }

    const handleMouseLeave = (_) => {
        setHideDropdown(true);
    }

    const logout = (e) => {
        persistor.purge();
        navigate("/");
    }

    return(
        <React.Fragment>
            <HeaderOne>
                <Logo onClick={logout}>LOGO</Logo>
                    <HeaderTwo>
                        { userName && userName.length > 0 ? 
                        <LogInContainer>
                            <p>Welcome {userName}!</p>
                            <Logout onClick={logout}>Logout</Logout>
                        </LogInContainer>
                        : <LogIn />
                        }
                        
                        <CartContainer onMouseEnter={handleClick} onMouseLeave={handleMouseLeave}>
                            <HeaderCartButton handleClick={handleClick}/>
                            <DropdownCart hidden={hideDropdown}/>
                        </CartContainer>
                    </HeaderTwo>
            </HeaderOne>
        </React.Fragment>
    )
};

const Logo = styled.h2`
    cursor: pointer;
`;

const DropdownCart = styled(Cart)`
    display: ${props => props.hidden ? 'none' : 'block'};
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
    right:0px;
`;

const CartContainer = styled.div`
    display: inline-block;
    align-self: center;
    position: relative;
`

const HeaderOne = styled.div`
    position: fixed;
    z-index: 1;
    width: calc(100% - 2rem);
    height: 25px;
    background-color: #fff;
    box-shadow: 0 1px 0 0 rgb(0, 0, 10%);
    border-bottom: 0.5px solid #DCDCDC;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 0 auto;
`;

const HeaderTwo = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Logout = styled.button`
    border: none;
    cursor: pointer;
    font:inherit;
    background-color: white;
`;

const LogInContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;


export default Header;