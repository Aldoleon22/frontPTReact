import React from 'react'
import { useState } from 'react';
// import Close from '../../../assets/image/images.png'
import {Link, Route} from 'react-router-dom';
import Reserver from '../reservation/Reserver';

function ListeItem({img, marque, details}) {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
  return (
    <div className='portfolio__item'>
        <img src={img} alt="" className="portfolio__img" />
        <div className='portfolio__hover' onClick={toggleModal}>
            <div className="portfolio__title" >{marque}</div>
        </div>
       {modal && (
        <div className='portfolio__modal'>
            <div className='portfolio__modal-content'>
                <img src={Close} alt='' className='modal__close' onClick={toggleModal} />

                <h3 className='modal__title'>Marque: {marque} </h3>
                <ul className='modal__list grid'>Détails:
                    {details.map(({icon, marque, desc}, index) => {
                        return(
                            <li className='modal__item' key={index}>
                                <span className='item_icon'>{icon} </span>
                           
                                <div>
                                    <span className='item__title'> {marque} </span>
                                    <span className='item__details'> {desc} </span>
                                </div>
                            </li>
                            
                        );
                    })}
                        <li>
                           <button type='submit'> <Link to="/liste-voiture/reserver">Reserver</Link></button> 
                        </li>
                </ul>
                <img src={img} alt='' className= 'modal__img' />
            </div>
        </div>
       ) }
     </div>
  )
}

export default ListeItem
