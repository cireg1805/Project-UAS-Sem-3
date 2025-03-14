import React from 'react';
import cart from '../assets/shopcart.png'
import '../css/style.css'
import { Link } from 'react-router-dom';

function Welcome ( ) {
    return(
        <div className='content2'>
            <div className='top'>
                <div className='judul'> DPuff </div>
            </div>
            <div className='bawah'>
                <div className='come1'>Come shop</div>
                <div className='come2'>with us !!</div>
                <Link to="/register">
                    <button className='tombol'>
                        <img className='gbr' src={cart} alt='shopcart'/>
                        
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Welcome;