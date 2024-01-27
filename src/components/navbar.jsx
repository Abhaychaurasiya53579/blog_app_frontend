import React, { useContext, useEffect } from 'react'
import "../component_style/navbar.css"
import {Link, useNavigate} from "react-router-dom";
import { authcontext } from '../App';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {
    const {auth,setauth,logged_in,setlogged_in}=useContext(authcontext);
const navigator =useNavigate();





const logout=()=>{
    console.log("logout");
    localStorage.removeItem("token");
    setlogged_in(true);
    navigator("/login");
}

  return (
    


<nav>
    <nav className='center'>
    <h1 style={{padding :"2px"}}>Daily Moments</h1>
    </nav>
    <nav className='nav'>
    <ul>
        <li>  <Link className="nav-link" to="/home"><h1 className='miui'><HomeIcon fontSize="large" color="disabled"/></h1> </Link></li>
        <li><Link className="nav-link" to="/create_blog"><h1 className='miui'><AddCircleOutlineSharpIcon fontSize="large" color="disabled"/></h1> </Link></li>
        <li className="right">    <Link className="nav-link " onClick={logout}  to ="/login"><h1 className='miui'><LogoutIcon fontSize="large" color="disabled"/></h1> </Link></li>
    </ul>
</nav>
</nav>
   
/* <ul  className="nav nav-pills nav-fill">


  
  <li className="nav-item">
    <Link className="nav-link" to="/home"><h5>HOME</h5></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/create_blog"><h4>Create-Blog</h4></Link>
  </li>
  
  <li className="nav-item">
    <Link className="nav-link " onClick={logout}  to ="/login"><h4>Log-out</h4></Link>
  </li>
  

 
</ul> */
  )
}

export default Navbar
