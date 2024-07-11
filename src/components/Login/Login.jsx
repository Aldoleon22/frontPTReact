import React, { useState,  useEffect, useContext } from 'react';
import axios from 'axios';
import './Login.scss';
import { useNavigate } from "react-router-dom";
import { TokenContext } from '../../TokenContext';


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [access_token, setAcces_token] = useState('');
  const [isToken, setIsToken] = useContext(TokenContext);


  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });
      
      if (response !== undefined && response.data.access_token) {
        setIsToken(true) 
 // Rediriger vers la page d'accueil après une connexion réussie
      navigate('/Home')
      }

     
      
  
    } catch (error) {
      // Gérer les erreurs
      setError('Invalid login details');
      
            
    }
  };

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Login</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
