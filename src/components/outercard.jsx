import React, { useEffect, useState } from 'react'
import "../component_style/outertcard.css"
import Postcard from "./postcard";
import Navbar from "./navbar";
import { useNavigate } from 'react-router-dom';

const Outertcard = () => {
  const navigator=useNavigate();
const [posts,setposts]=useState([]);

useEffect(()=>{
const fetchdata=async(e)=>{
  const res = await fetch("https://blog-abh-back.onrender.com/api/blog/find",{
    method:"GET",
    headers:{
      token:localStorage.getItem("token")
    }
  })
 
  const data = await res.json();
  if(data.msg =="unauthorized"){
    alert("abhay")
    navigator("/login");
    return;
  }
  if(res.ok){
    setposts(data); 
  }
 
}
fetchdata();
},[posts])


  return (
    

    <div className ="outercard">

   {
    posts && posts.map((element,index)=>(
      <Postcard  post ={element}  />
    ))
   } 
  
   </div>
  
  )
}

export default Outertcard
