import React from 'react'
import Image from "../../assets/image/46.jpg";
import { Link } from 'react-router-dom';
const Car = () => {
    return (
        <>
            <div className="car">
                <div className="img-car">
                    <img src={Image} alt="" className='image-car' />
                </div>
                <div className='desc'>
                    <div className="desc-car">
                        <p>Marque: <span>Hiunday</span></p>
                        <p>Matricule: <span>12345 TBD</span></p>
                    </div>
                    <div className="action">
                        <Link className='modif' to='/Modifengin'>Modifier</Link>
                        <a href="" className='suppr'>Supprimer</a>
                    </div>
                </div>
            </div>
            <div className="car">
                <div className="img-car">
                    <img src={Image} alt="" className='image-car' />
                </div>
                <div className='desc'>
                    <div className="desc-car">
                        <p>Marque: <span>Hiunday</span></p>
                        <p>Matricule: <span>12345 TBD</span></p>
                    </div>
                    <div className="action">
                        <a href="" className='modif'>Modifier</a>
                        <a href="" className='suppr'>Supprimer</a>
                    </div>
                </div>
            </div>
            <div className="car">
                <div className="img-car">
                    <img src={Image} alt="" className='image-car' />
                </div>
                <div className='desc'>
                    <div className="desc-car">
                        <p>Marque: <span>Hiunday</span></p>
                        <p>Matricule: <span>12345 TBD</span></p>
                    </div>
                    <div className="action">
                        <a href="" className='modif'>Modifier</a>
                        <a href="" className='suppr'>Supprimer</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Car