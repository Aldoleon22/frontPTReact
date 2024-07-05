import React, { useState } from 'react'
import Mod from '../Form/Mod'
import '../AjoutEngin/AjoutEngin.scss'
function ModEngin() {
    const [marque, setMarque] = useState('Marque')

    const [matricule, setMatricule] = useState('matricule')
    const [file, setFile] = useState('image')

    return (
        <div className='AjoutEngin'>

            <div className='Engin'>
                <span className="title">Modification de voiture</span>

                <form>
                    <div className='row'>
                        <div className='left'>

                            <Mod
                                type="text"

                                placeholder="Marque de voiture"
                                name="marque"
                                value={marque}
                                onChange={setMarque}
                                className="input"
                            />

                            <Mod
                                type="text"

                                placeholder="matricule"
                                name="matricule"
                                value={matricule}
                                onChange={setMatricule}
                                className="input"
                            />
                            <Mod
                                type="file"
                                value={file}
                                onChange={setFile}
                                name="image"
                            />


                        </div>
                    </div>
                    <input type="submit" className='submit' value='enregistrer' />
                </form>
            </div>
        </div>
    )
}

export default ModEngin