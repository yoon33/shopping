import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AvailableProduct from './components/Products/AvailableProduct';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckOut from './components/CheckOut/CheckOut';

function App() {
  return (
    <Root> 
      <BrowserRouter>
      <Header/>
      <Body>
          <Routes>
            <Route path="/" element={<AvailableProduct />}/>
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
      </Body>
      </BrowserRouter>
    </Root>
  );
}

const Root = styled.div`

`;

const Body = styled.div`
  padding-top: 50px;
`;

export default App;
