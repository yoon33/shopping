import React, {useState} from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import Modal from 'react-modal';

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
  

const ProductItem = props => {

    const [quickViewClick, setQuickViewClick] = useState(false);

    const showProductModal = () => {
        setQuickViewClick(true)
    };

    const hideProductModal = () => {
        setQuickViewClick(false)
    };


    const price = `$${props.price.toFixed(2)}`;
    return(
        <Product>
            <ProductInfo>
                <ImageContainer>
                    <Overlay>
                        <Text onClick={showProductModal}>Quick View</Text>
                    </Overlay>
                    <Image src={props.image}/>
                </ImageContainer>
                <Name>{props.name}</Name>
                <Price>{price}</Price>
            </ProductInfo>
            <Modal shouldCloseOnOverlayClick={true} onRequestClose={hideProductModal} isOpen={quickViewClick} style={customStyles} shouldCloseOnEsc={true}>
                <ProductCard id={props.id} description={props.description} name={props.name} price={price} onExit={hideProductModal}/>
            </Modal>
        </Product>
    )
}



const Product = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`;

const Image = styled.img`
    width: 30vw;
    height: 30vw;
`;

const ImageContainer = styled.div`
    position: relative;
`;

const Text = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: black;
    background-color: #DCDCDC;
    text-align: center;
    font-size: 20px;
    width: 100%;
    height: 10%;
    opacity: 1;
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    opacity: 0;
    transition: .5s ease;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`

const Name = styled.p`
    margin: 0 0 0.25rem 0;
`;

const Price = styled.p`
    color: black;
    margin-top: 0.25rem;
`;

export default ProductItem;