import AllUser from "./components/AllUser/AllUser"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import AdHome from './components/Admin/Homadmin/AdHome'
import Dashboard from "./components/Dashboard/Dashboard"
import Car from "./components/Car/Car"
import Inscription from "./components/inscription/Inscription"
import { Route, Routes } from "react-router-dom"
import UserVue from "./components/VueUser/UserVue"
function App() {
  return (
    <>
      {/* <Inscription/> */}
      {/* <AdHome/> */}
      
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
