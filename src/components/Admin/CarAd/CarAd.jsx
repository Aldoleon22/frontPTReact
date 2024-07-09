import React from 'react'
import Image from "../../../assets/image/46.jpg";
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Car = () => {
    return (
        <>
                    <div className="car">
                        <div className="img-car">
                            <img src={Image} alt="" className='image-car' />
                        </div>
                        <div className='desc'>
                            <div className="desc-car">
                                <p>Marque: <span>Camion</span></p>
                                <p>Matricule: <span>12345TBD</span></p>
                            </div>
                            <div className="action">
                                <Link className='modif' to={'/voir'}>Voir</Link>
                                <button className='suppr'>Supprimer</button>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Car