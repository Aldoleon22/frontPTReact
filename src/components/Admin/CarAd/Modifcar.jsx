import React, { useEffect, useState } from 'react'
import './Modifcar.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Modifcar = () => {
    const {id} = useParams();
    const [carModif, setcarModif] = useState({
        marque:'',
        matricule:'',
        photo:null
    })

    useEffect(()=>{
        fetchModif();
    },[id])

    const carChange = (e) => {
        const {name, value} = e.target;
        setcarModif(prevState => ({
            ...prevState,
            [name]:value,
            
        }));
        console.log(setcarModif.name);
    };

    const fileChange = (e) => {
        setcarModif(prevState => ({
            ...prevState,
            photo: e.target.files[0],
        }))
    }

    const fetchModif=async()=>{
        try {
            const affiche=await axios.get("http://127.0.0.1:8000/api/listeVehicule/"+id);
            console.log(affiche.data.car);
            setcarModif(affiche.data.car);
        } catch (error) {
            console.log("verifier le code");
        }
    }

    const modify=async()=>{
        try {
            const resultat=await axios.post("http://127.0.0.1:8000/api/updatCar/"+id)
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
                        <input type="text" name='marque' placeholder='HIUNDAY' value={carModif.marque} onChange={carChange} />
                    </div>
                    <div className="inplab">
                        <label htmlFor="">Matricule:</label>
                        <input type="text" placeholder='1234 TBA' name='matricule' value={carModif.matricule} onChange={carChange} />
                    </div>
                    <div className="inplab">
                        <label htmlFor="">Description:</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="inplab">
                        <label htmlFor="">Photo:</label>
                        <input type="file"  name='photo' onChange={fileChange} />
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