import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import "../css/header.css"

const Header2 = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/mainpage");
  };
  return (
    <div className='atas'>
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
      <div className='judul'>Product</div>
      <Link to='/checkout'>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginRight:'3vh',
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
          Checkout
        </Button>
      </Link>
    </div>
  )
}

export default Header2