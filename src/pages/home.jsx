import React from 'react';
import Outertcard from "../components/outercard"
import Navbar from  "../components/navbar"
import "../component_style/home.css";
import {useState,useEffect} from "react";
import RingLoader  from "react-spinners/RingLoader";

const Home = () => {
  const [loading,setloading]= useState(false);

  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
      setloading(false);
    },6000)
  },[])
  return (

    <div>
    {loading?
      <RingLoader color="#36d7b7" />
    :
    <div className='home'>
    <Navbar/>
    <div className='Outercard'>
      <Outertcard/>

    </div>
    </div>
    }
</div>
   
   

  )
}

export default Home
