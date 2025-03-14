import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../css/style.css"
import { Link } from 'react-router-dom';
import Header from './Header';

const BASE_URL = "http://localhost:3031/product";

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Ambil token dari localStorage
        const token = localStorage.getItem('accessToken');

        // Kirim permintaan ke backend untuk mendapatkan data produk
        const response = await axios.get(BASE_URL, {
          headers: {
            Authorization: token,
          },
        });

        setProducts(response.data.products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='content1' >
    <Header/>
        <div className='container'>
        {products.map(product => (
            <Link key={product.id} to={`/buyproduct/${product.id}`} className='box'> 
              <img src={product.gambar} alt={product.name} />
              {product.name}
            </Link>
          ))}
        </div>
    </div>
  );
};

export default MainPage