import React, { useState } from 'react';
import axios from 'axios';
import './Login.scss';

const Header = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email,
        password,
      });

      // Stockez le token d'authentification dans le local storage
      localStorage.setItem('auth_token', response.data.access_token);

      // Rediriger ou afficher un message de succès
      console.log('Login successful');
    } catch (error) {
      // Gérer les erreurs
      setError('Invalid login details');
    }
  };

  return (
    <>
      <div className="content">
        <div className="log">
          <h1 className='title_log'>Connexion</h1>
          <div className="formu">
            <form onSubmit={handleLogin}>
              <div className="inp">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder='Exemple:Exemple@gmail.com'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="inp">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <div className="btnsub">
                <button type="submit">Connexion</button>
              </div>
              <div className="oubl">
                <p>Mots de passe <a href="">oublier</a>?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
