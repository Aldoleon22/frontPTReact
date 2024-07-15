import React, { useState } from 'react'
import './Login.scss'
import { useNavigate } from 'react-router'
const Header = () => {
  const Navigate = useNavigate();
  const redirect=()=>{
      Navigate('/home');
  }

  return (
    <>
      <div className="content">
        <div className="log">
          <h1 className='title_log'>Connexion</h1>
          <div className="formu">
            <form action="">
              <div className="inp">
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Exemple:Exemple@gmail.com ' name='email' />
              </div>
              <div className="inp">
                <label htmlFor="Password">Password</label>
                <input type="password" name='password' />
              </div>
              <div className="btnsub">
                <button type="submit">Connexion</button>
              </div>
              <div className="oubl">
                <p>Mots de passe <a href="" onClick={()=>redirect()}>oublier</a>?</p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header