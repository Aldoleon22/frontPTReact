import React from 'react'
import './Adhome.scss'
import { TfiPowerOff, TfiSearch } from 'react-icons/tfi'
import { FaHome, FaRegUser } from 'react-icons/fa'
import { IoPersonAdd } from 'react-icons/io5'
import { MdAddBox } from 'react-icons/md'
import { Link, Route, Routes } from 'react-router-dom'
import Image from "../../../assets/image/46.jpg";
import Home from '../../Home/Home'
import CarAd from '../CarAd/CarAd'
import Inscription from '../../inscription/Inscription'
import AllUserAd from '../AllUserAd/AllUserAd'
import CarModifAd from '../CarAd/CarModifAd'
import Modifcar from '../CarAd/Modifcar'
import Addimage from '../CarAd/Addimage'
const AdHome = () => {
    return (
        <div className="content-home">
            <header className='header'>
                <div className="logo">
                    <h1 className='text-logo'>Car</h1>
                </div>
                <div className="info">
                    <div className="search">
                        <p className='logosearch'><TfiSearch /></p>
                        <input type="text" placeholder='Search car' />
                    </div>

                    <div className="user">
                        <img src={Image} alt="" className='imgprof' width={"30px"} />
                        <p>Jhon Doe</p>

                        <div className="out">
                            <a href="" className='logout'><TfiPowerOff /></a>
                        </div>
                    </div>

                </div>
            </header>

            <div className="content-bar">
                <div className="aside-bar">
                    <ul>
                        <li className="nav-link active" ><Link className="nav-item" to='/Adhome'><FaHome className='icon' /> Home</Link></li>
                        <li className="nav-link"><Link className="nav-item" to='/AdCar'><MdAddBox className='icon' /> Add car</Link></li>
                        <li className="nav-link" ><Link className="nav-item" to='/AllUser'><FaRegUser className='icon' /> All User</Link></li>
                    </ul>
                </div>

                <div className="content-element">
                    <Routes>
                        <Route path='/Adhome' element={<CarAd />} />
                        <Route path='/AdCar' element={<Inscription />} />
                        <Route path='/AllUser' element={<AllUserAd />} />
                        <Route path='/voir' element={<CarModifAd />} />
                        <Route path='/CarAdModif' element={<Modifcar />} />
                        <Route path='/Addimage' element={<Addimage />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default AdHome