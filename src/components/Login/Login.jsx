import React, { useState,  useEffect } from 'react';
import axios from 'axios';
import './Login.scss';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [access_token, setAcces_token] = useState('');
  useEffect(async() => {
    const response = await axios.post('http://localhost:8000/api/login', {
      email,
      password,
    });
    setAcces_token(response.data.access_token)
    //Runs on every render
  },[]);



  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      
      // Stockez le token d'authentification dans le local storage
      localStorage.setItem('auth_token', access_token);

      // Rediriger vers la page d'accueil après une connexion réussie
      navigate('/Home')
      
      console.log('Login successful', access_token);
  
    } catch (error) {
      // Gérer les erreurs
      setError('Invalid login details');
      
            
      console.log('erreur', error );
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
