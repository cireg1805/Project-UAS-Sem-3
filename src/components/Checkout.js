import React from 'react'
import "../css/checkout.css"
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Layout2 from './Layout2'
import { useCart } from '../function/CartContext';

const Checkout = () => {
  const { state, calculateTotalPrice, resetCart } = useCart();

  const handlePay = () => {
    resetCart();
  };
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/mainpage");
  };
  return (
    <div className='content2'>
      <Layout2/>
      <div className='atas1'>
      <Button
          onClick={handleBack}
          variant="contained"
          color="primary"
          sx={{
            marginLeft:'7vh',
            backgroundColor: "rgb(187, 144, 128)",
            borderRadius: "8px",
            "&:active": {
              backgroundColor: "rgb(201, 129, 107)",
            },
            "&:hover": {
              backgroundColor: "rgb(170, 109, 90)",
            },
          }}
        >
          Back
      </Button>
        <div className='judul'>Checkout</div>
        <div className='blank'>Tes</div>
      </div>
      <div className='checkoutBox'>
        <div className='bill'>Bill</div>
        <div className='checkoutList'>
            {state.cartItems.map((item, index) => (
              <div className='checkoutList1' key={index}>
                <div>{item.productName} x {item.quantity}</div>
                <div>{item.totalPrice}$</div>
              </div>
            ))}
          <div className='checkoutList2'>
            <div>Total</div>
            <div>{calculateTotalPrice()}$</div>
            </div>
        </div>
      </div>
      <Link to='/thanks' className='payButton' onClick={handlePay}> PAY </Link>
    </div>
  )
}

export default Checkout