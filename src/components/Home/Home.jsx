import React, { useState } from 'react'
import './Home.scss'
import { TfiSearch } from "react-icons/tfi";
import { TfiPowerOff } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Image from "../../assets/image/46.jpg";
import AllUser from "../AllUser/AllUser"
import Car from "../Car/Car"
import Inscription from '../inscription/Inscription';
import AjoutEngin from '../AjoutEngin/AjoutEngin';
import ModEngin from '../ModifEngine/ModEngin';
import { Link, Route, Routes } from 'react-router-dom';

// const [show,showset] = useState = false;

const Home = () => {
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
                        <li className="nav-link active" ><Link className="nav-item" to='/'><FaHome className='icon' /> Home</Link></li>
                        <li className="nav-link"><Link to='/Inscription' className="nav-item"><IoPersonAdd className='icon' /> Add User</Link></li>
                        <li className="nav-link"><Link className="nav-item" to='/Addcar'><MdAddBox className='icon' /> Add car</Link></li>
                        <li className="nav-link"><Link className="nav-item" to='/User'><FaRegUser className='icon' /> All User</Link></li>
                        {/* <li className="nav-link"><a href="" className="nav-item"><FaHome />Home</a></li>
                        <li className="nav-link"><a href="" className="nav-item"><FaHome />Home</a></li> */}
                    </ul>
                </div>

                <div className="content-element">
                    <Routes>
                        <Route path='/' element={<Car />} />
                        <Route path='/Inscription' element={<Inscription />} />
                        <Route path='/Addcar' element={<AjoutEngin />} />
                        <Route path='/Modifengin' element={<ModEngin />} />
                        <Route path='/User' element={<AllUser />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Home