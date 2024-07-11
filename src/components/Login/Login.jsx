import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../TokenContext';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [, setIsToken] = useContext(TokenContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      if (response.data && response.data.access_token) {
        setIsToken(true);

        // Rediriger en fonction du statut de l'utilisateur
        const userStatus = response.data.role;
       console.log(userStatus);
      
        switch (userStatus) {
          case 'superAdmin':
            console.log('Connecté en tant que SuperAdmin');
            navigate('/superadmin');
            break;
          case 'admin':
            console.log('Connecté en tant qu Admin');
            navigate('/admin');
            break;
          default:
            console.log('Connecté en tant que User');
            navigate('/home');
            break;
        }
      } else {
        setError('Invalid login details');
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
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
