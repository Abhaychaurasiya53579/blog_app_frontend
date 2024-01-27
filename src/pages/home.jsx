import React from 'react';
import Outertcard from "../components/outercard"
import Navbar from  "../components/navbar"
import "../component_style/home.css";

const home = () => {
  return (
    <div className='home'>

    <Navbar/>
    <div className='Outercard'>
      <Outertcard/>

    </div>
    </div>
   

  )
}

export default home
