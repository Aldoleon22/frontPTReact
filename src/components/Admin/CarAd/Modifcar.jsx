import React from 'react'
import './Modifcar.scss'
const Modifcar = () => {
    return (
        <div className='carmodif'>
            <div className="formulaire">
                <h1>Modifier la vehicule</h1>
                <form action="">
                    <div className="inplab">
                        <label htmlFor="">Marque:</label>
                        <input type="text" placeholder='HIUNDAY' />
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