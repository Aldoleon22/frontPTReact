import AllUser from "./components/AllUser/AllUser"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Dashboard from "./components/Dashboard/Dashboard"
import Car from "./components/Car/Car"
import Inscription from "./components/inscription/Inscription"
import { Route, Routes } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import AdHome from "./components/Admin/Homadmin/AdHome"
import AjoutEngin from "./components/AjoutEngin/AjoutEngin"
import ModEngin from "./components/ModifEngine/ModEngin"
import CarModifAd from "./components/Admin/CarAd/CarModifAd"
import Homeuser from "./components/Userpage/HomeUser/Homeuser"
function App() {
  return (
    <>
      <Homeuser />
    </>
  )

}

export default App
