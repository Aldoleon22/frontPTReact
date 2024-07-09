import React from 'react'
import Image from "../../assets/image/46.jpg";
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Car = () => {
    const [car, setCar] = useState([]);
    const {id}= useParams();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/vehic')
            .then(response => {
                setCar(response.data.vehic);
                // console.log(response.data.vehic);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const Del = (id) => {
        const carId = id;
        // console.log(id);
        axios.get(`http://127.0.0.1:8000/api/vehic/${carId}`)
        .then(() => {
            setCar(car.filter(car => car.id !== id));
        })
        .catch(error => {
            console.error('Error de la suppression car:', error);
        });
    }
    const up = (id)=>{
        axios.get(`http://127.0.0.1:8000/api/update/${id}`)
    }
    
    return (
        <>
            {

                car.map(cars => (

                    <div className="car" key={cars.id}>
                        <div className="img-car">
                            <img src={Image} alt="" className='image-car' />
                        </div>
                        <div className='desc'>
                            <div className="desc-car">
                                <p>Marque: <span>{cars.marque}</span></p>
                                <p>Matricule: <span>{cars.matricule}</span></p>
                            </div>
                            <div className="action">
                                <Link className='modif' to={`/Modifengin/${cars.id}`} onclick={()=>up(cars.id)}>Modifier</Link>
                                <button className='suppr' onClick={()=>Del(cars.id)}>Supprimer</button>
                            </div>
                        </div>
                    </div>
                ))

            }

        </>
    )
}

export default Car