import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import LogInModal from './LogInModal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '1rem',
      borderRadius: '14px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
      border: 'none'
    },
  };

const LogIn = (props) => {
    const [quickViewClick, setQuickViewClick] = useState(false);

    const hideLogInModal = () => {
        setQuickViewClick(false)
    };

    const showLogInModal = () => {
        setQuickViewClick(true)
    };

    return(
        <Button>
            <span onClick={showLogInModal}>Log In </span>
            <Modal shouldCloseOnOverlayClick={true} onRequestClose={hideLogInModal} isOpen={quickViewClick} style={customStyles} shouldCloseOnEsc={true} >
                <LogInModal />
            </Modal>
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


export default LogIn;