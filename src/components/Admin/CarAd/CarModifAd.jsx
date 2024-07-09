import React from 'react'
import './CarModifAd.scss'
import Image from '../../../assets/image/46.jpg'
import { FaUserEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdAddBox } from 'react-icons/md';
const CarModifAd = () => {
    return (
        <div>
            <div className="desCar">
                <h1>Description du vehicule</h1>
                <div className="imagedesc">
                    <div className='image'>
                        <img src={Image} alt="" width={'200px'} />

                        <div className="cardescription">
                            <span>HIUNDAY</span>
                            <span>1324 TBD</span>
                            <span>50.000 Ar/j</span>
                        </div>
                    </div>
                    <div className="soudesc">
                        <h2>Voiture standart</h2>
                        <p>Chauffeur offert</p>
                        <p>Tarifs necociable</p>
                        <p>Voiture bien entretenue</p>

                        <div className="action">
                            <Link className='linkcar' to={'/CarAdModif'}><FaUserEdit className='icon' /></Link>
                            <Link className='linkcar' to={'/addimage'}><MdAddBox className='icon' /></Link>
                        </div>
                        <div className="gallerypar">
                            <h3>Tous les images</h3>
                            <div className="gallery">
                                <img src={Image} alt="" />
                                <img src={Image} alt="" />
                                <img src={Image} alt="" />
                                <img src={Image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarModifAd