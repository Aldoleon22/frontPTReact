import React from 'react'
import './reservation.scss'
const Reserver = () => {
  return (
    <div className='reservation'>
        <div className='form datas'>
            <h1>Résèrvation de vehicule</h1>
            <form>
                <div className='input'>
                    <label className='color'>nom</label><br/>
                    <input type="text" placeholder="votre nom" name="nom" className='soratra' />
                </div>
                <div className='input'>
                    <label className='color'>email</label><br/>
                    <input type="email" placeholder="votre email" name="email" className='soratra' />
                </div>
                <div className='input'>
                    <label className='color'> date de début</label><br/>
                    <input type="date" placeholder="date début de votre reservation" className='soratra' />
                </div>
                <div className='input'>
                    <label className='color'> date de Fin</label><br/>

                    <input type="date" placeholder="date fin" className='soratra' />
                </div>
                <div className='input-field button'>
                    <input type="submit" value="Enregistrer"/>
                </div>
            </form>
        
        </div>
    </div>
  )
}

export default Reserver
