import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Image from "../../../assets/image/46.jpg";
import { Voituredetail } from '../data/Voituredetail';
import ListeItem from './ListeItem';
import './portefolio.css'

const ListeCar = () => {
    
  return (
    <div className='content-element'>

        
            <section className='portfolio section'>
                
                <div className='portfolio__container container grid'>
                    {Voituredetail.map((item)=>{
                        return <ListeItem key={item.id} {...item}/>
                    })}
                </div>
            </section>
        
       
    </div>
  )
}

export default ListeCar
