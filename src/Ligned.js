import React from 'react';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import BuyProduct from './components/BuyProduct';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Start from './components/Start';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';
import { CartProvider } from './function/CartContext';

const Ligned = () => {
  const [users, setUsers] = React.useState([]);
  const handleRegister = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <CartProvider>
      <Routes>
        <Route path='/'element={<Welcome />} />
        <Route path='/register' element={<Register onRegister={handleRegister}/>} />
        <Route path='/login' element={<Login users={users}/>} />
        <Route path='/start' element={<Start/>}/>
        <Route path='/mainpage' element={<MainPage />} />
        <Route path='/buyproduct/:id' element={<BuyProduct />} />
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/thanks' element={<ThankYou/>}/>
      </Routes>
    </CartProvider>
  );
};

export default Ligned