import React from 'react'
import Navbar from './navigation/Navbar'
import RouteUser from './Route/RouteUser'

import TopUser from './TopUser/TopUser'

const UserVue = () => {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='main__layout'>
            <TopUser/>
        </div>
        <div className='content'>
            <RouteUser/>
        </div>

    </div>
  )
}

export default UserVue
