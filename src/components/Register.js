import {React, useState} from 'react'
import Layout from './Layout'
import { Link, useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment, createTheme, ThemeProvider,} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and Confirm Password must match.');
      return;
    }
    try {
      // Kirim permintaan untuk membuat user baru
      const response = await fetch('http://localhost:3031/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        alert('Registration Successful!');
        navigate('/login');
      } else {
        const data = await response.json();
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const customTheme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputLabel-root": {
              color: "#8d6e63",
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: "#8d6e63",
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "#8d6e63",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#8d6e63",
            },
            "& .MuiInput-input": {
              color: "#8d6e63",
            },
            "&.Mui-focused": {
              "& .MuiInputLabel-root": {
                color: "#8d6e63",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#8d6e63",
              },
            },
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Layout/>
      <div className='login-container'>
        <div className='inside'>
          <p className='p2'>
            Let's get you start <br/>
            on the first story page! <br/>
            Your secret is sure safe<br/>
            with us!</p>
        </div>
        <div className="right">
            <div className='loginBox'>
              <h2>Register</h2>
              <form >
                <TextField
                  variant='standard'
                  required
                  sx={{width: "231px",
                  "& .MuiInput-root": {
                    color: "#8d6e63",
                    borderBottomColor: "#8d6e63",
                  },
                  "& .Mui-focused": {
                    "& .MuiInputLabel-root": {
                      color: "#8d6e63",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#8d6e63",
                    },
                    "& .MuiInput-input": {
                      color: "#8d6e63",
                    },
                  },}}
                  label= 'Username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} 
                />
                <br/>
                <TextField
                  variant='standard'
                  required
                  sx={{"& .MuiInput-root": {
                    color: "#8d6e63",
                    borderBottomColor: "#8d6e63",
                  },
                  "& .Mui-focused": {
                    "& .MuiInputLabel-root": {
                      color: "#8d6e63",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#8d6e63",
                    },
                    "& .MuiInput-input": {
                      color: "#8d6e63",
                    },
                  },}}
                  type={showPassword ? 'password' : 'text'}
                  label='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={togglePasswordVisibility}
                        edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                  }}
                />
                <br/>
                <TextField
                  variant='standard'
                  required
                  sx={{"& .MuiInput-root": {
                    color: "#8d6e63",
                    borderBottomColor: "#8d6e63",
                  },
                  "& .Mui-focused": {
                    "& .MuiInputLabel-root": {
                      color: "#8d6e63",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#8d6e63",
                    },
                    "& .MuiInput-input": {
                      color: "#8d6e63",
                    },
                  },}}
                  type={showConfirmPassword ? 'password' : 'text'}
                  label='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  InputProps={{
                  endAdornment: (
                              <InputAdornment position="end">
                                  <IconButton
                                      onClick={toggleConfirmPasswordVisibility}
                                      edge="end">
                                      {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                  </IconButton>
                              </InputAdornment>
                          ),
                      }}
                      />
                      <br/>
                      <div className='signText'>Already have an account?? <Link className='linkLogin' to="/login">Login </Link></div>
                  <button onClick={handleRegister} type='submit' className='btn'>Sign In</button>
              </form>
              </div>
            </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default Register;