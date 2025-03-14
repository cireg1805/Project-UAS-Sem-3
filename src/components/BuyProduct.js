import React, {useState, useEffect} from 'react'
import axios from 'axios';
import cart from '../assets/shopcart.png'
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import "../css/buyproduct.css"
import Header2 from './Header2'
import { useCart } from '../function/CartContext'

const BuyProduct = () => {
  const { id } = useParams(); 
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [totalHarga, setTotalHarga] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const Token = localStorage.getItem('accessToken');
          if (!Token) {
            navigate('/login');
            return;
          }
        const response = await axios.get(`http://localhost:3031/product/${id}`, {
          headers: {
            'Authorization': `Bearer ${Token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.status === 200) {
          const productData = response.data.product[0];
          setSelectedProduct(productData);
          setTotalHarga(productData.price * quantity);
        } else {
          console.error('Error fetching product data');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
      } 
    };

    fetchProduct();
  }, [quantity, id, navigate]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSave = () => {
    const dataToSave = {
      productName: selectedProduct.name,
      quantity: quantity,
      totalPrice: totalHarga,
    };

    dispatch({ type: 'ADD_TO_CART', payload: dataToSave });
    alert('Pembelian sukses!');
    navigate('/mainpage');
  };

  return (
    <div className='content2'>
      <Header2/>
      <div className='buyProductBox'>
        <div className='buyProductImage'>
          <img className='gbr' src={selectedProduct.gambar} alt='img'/>
        </div>
        <div className='buyProductDesc'>
          <div className='buyProductTitle'>{selectedProduct.name}</div>
          <div className='desc'>
            <div>Size   : {selectedProduct.size}</div>
            <div>Price  : {selectedProduct.price}$/pcs</div>
            <br/>
            <div className='desk2'>{selectedProduct.description}</div>
            <br/>
            <div>Price Total: {totalHarga}$</div>
            <div className='plusMin'>
              <button onClick={handleDecrement}>-</button>
              <span className='amount'>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            <Button 
              onClick={handleSave}
              variant="contained"
              color="primary"
              sx={{
                marginTop:'10px',
                backgroundColor: "rgb(187, 144, 128)",
                borderRadius: "8px",
                "&:active": {
                  backgroundColor: "rgb(201, 129, 107)",
                },
                "&:hover": {
                  backgroundColor: "rgb(170, 109, 90)",
                },
            }}>
              <img className='gambar' src={cart} alt='shopcart'/>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyProduct;