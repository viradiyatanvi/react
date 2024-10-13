import axios from 'axios';
import React, { useContext, useState } from 'react';
import { authContext } from '../Contextapi/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useContext(authContext);
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`https://reqres.in/api/login`, { email: username, password })
      .then((res) => {
        login(res.data.token);
        navigate('/Form');
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  return (
    <div style={{marginTop:"30px"}}>
        <form
            onSubmit={handleSubmit} 
            style={{ 
                maxWidth: '400px', 
                margin: '0 auto', 
                padding: '20px', 
                border: '1px solid #ccc', 
                borderRadius: '5px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)' 
            }}
        >
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Username or Email:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
            <button 
                type="submit" 
                style={{ 
                    padding: '10px 15px', 
                    backgroundColor: '#007bff', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: 'pointer', 
                    width: '100%' 
                }}
            >
                Login
            </button>
        </form>
    </div>
  );
};

export default Login;
