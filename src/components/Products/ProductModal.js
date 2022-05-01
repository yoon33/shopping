import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// const ModalOverlay = (props) => {
//     return(
//         <Modals>
//             {props.children}
//         </Modals>
//     )
// };


const ProductModal = (props) => {

    return(
        <Modals className={props.className}>
            {props.children}
        </Modals>
    )
};


const Modals = styled.div`
    width: 200px;
    height: 200px;
    background-color: white;
`;

export default ProductModal;
  




