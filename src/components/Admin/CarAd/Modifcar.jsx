import React, { useEffect, useState } from 'react'
import './Modifcar.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Modifcar = () => {
    const {id} = useParams();
    const [carModif, setcarModif] = useState([])

    useEffect(()=>{
        fetchModif();
    },[id])

    const fetchModif=async()=>{
        try {
            const affiche=await axios.get("http://127.0.0.1:8000/api/listeVehicule/"+id);
            console.log(affiche.data.car);
            setcarModif(affiche.data.car);
        } catch (error) {
            console.log("verifier le code");
        }
    }
    return (
        <div className='carmodif'>
            <div className="formulaire">
                <h1>Modifier la vehicule</h1>
                <form action="">
                    <div className="inplab">
                        <label htmlFor="">Marque:</label>
                        <input type="text" placeholder='HIUNDAY'  />
                    </div>
                    <div className="inplab">
                        <label htmlFor="">Matricule:</label>
                        <input type="text" placeholder='1234 TBA' />
                    </div>
                    <div className="inplab">
                        <label htmlFor="">Description:</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="inplab">
                        <label htmlFor="">Photo:</label>
                        <input type="file" />
                    </div>
                    <div className="inplab">
                        <button>Modifier</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modifcar