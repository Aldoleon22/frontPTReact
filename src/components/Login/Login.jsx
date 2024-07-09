import React from 'react'
import './Login.scss'
const Header = () => {
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
                <p>Mots de passe <a href="">oublier</a>?</p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header