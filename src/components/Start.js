import React from 'react'
import '../css/start.css'
import { Link, useNavigate } from 'react-router-dom'


const Start = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    navigate('/login');
  };
  return (
    <div className='start'>
      <div className='startHeader'>
        <button onClick={handleLogout} className='logoutButton'>
          Logout
        </button>
        <div className='startText'>Hop into the Rabbithole <br/> and start exploring our shop!</div>
      </div>
      <Link to='/mainpage' className='startLink'>
        <button className='startButton'>
          Enter
        </button>
      </Link>
    </div>
  )
}

export default Start