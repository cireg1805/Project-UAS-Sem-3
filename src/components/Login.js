import React, { useState } from 'react'
import axios from 'axios';
import "../css/login.css"
import { useNavigate, Link } from 'react-router-dom'
import { TextField, IconButton, InputAdornment,createTheme, ThemeProvider,} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Layout from './Layout';

const Login = ({user}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
        // Kirim permintaan login ke backend (database user)
        const response = await axios.post('http://localhost:3031/login', {
          username: username,
          password: password,
        });
    
        const token = response.data.token;
    
        // Simpan token ke localStorage agar bisa digunakan untuk otentikasi saat ingin membaca data produk
        localStorage.setItem('accessToken', token);
        alert(`Login berhasil!`);
    
        // Redirect ke halaman selanjutnya
        navigate('/start');

        // Apabila kredensial yg diinput tidak sesuai, akan error
      } catch (error) {
        console.error('Login failed:', error);
        alert('Login failed. Check your credentials.');
      }
    };
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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

    return(
        <ThemeProvider theme={customTheme}>
            <div>
            <Layout/>
            <div className='login-container'>
                <div className='inside'>
                    <p className='p1'>Don't Worry <br/>Your Account is Safe <br/>With Us!</p>
                </div>
                <div className="right">
                    <div className='loginBox'>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <TextField
                            variant='standard'
                            required
                            sx={{width:231,
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
                            },
                        }}
                            label= 'Username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            <br/>
                        <TextField
                            variant='standard'
                            required
                            sx={{
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
                                },
                              }}
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
                        <div className="kiri">
                            <input type="checkbox" className="remember" /> Remember me
                        </div>
                        <div className='signText'>Don't Have Account Yet? <Link to="/register" className='linkLogin'>Sign Here</Link></div>
                    <button type='submit' className='btn'>Login</button>
                </form>
                </div>
                </div>
            </div>
        </div>
    </ThemeProvider>
    )
}

export default Login;