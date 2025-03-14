import React from 'react'
import '../css/thank.css'
import { Link } from 'react-router-dom'
import back from '../assets/backButton.png'

const ThankYou = () => {
  return (
    <div className='thanksPage'>
        <div className='come3'>Thank You for <br/> your Purchase!</div>
        <Link to='/mainpage'>
            <img className='backButton' src={back} alt='backbtn'/>
        </Link>
    </div>
  )
}

export default ThankYou