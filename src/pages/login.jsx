import React, { useContext } from 'react'
import "../component_style/style.css"
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { authcontext } from '../App';

const Login = () => {
const {setlogged_in}= useContext(authcontext);
    const navigator=useNavigate();
  
    const [password,setpassword]=useState("password");
    const [email,setemail]=useState("random@email");
    
   
    const handle_login1change=(event)=>{
        setemail(event.target.value);
    }
    const handle_login2change=(e)=>{
        setpassword(e.target.value);
    }

    
    

    const register= async (e)=>{
        
        e.preventDefault();
       const res=   await fetch("https://blog-abh-back.onrender.com/api/user/login",{
             method:"POST",
             body: JSON.stringify({email,password}),
              headers:{"content-type":"application/json"}
         })
        const data = await res.json();
        console.log(data);
        if(res.ok){
            setlogged_in(false);
            localStorage.setItem("token",data.token);
        navigator("/home");
        }
        else{
         console.log(email,password)
        }
     }
    





  return (

<body>
  

    <div class="main"> 
        <h1>Daily Moments</h1> 
        <h3>Enter your login credentials</h3> 
        <form action=""> 
            <label > 
                  Username: 
              </label> 
            <input  value ={email} onChange={handle_login1change} type="text" 
                   placeholder="Enter your Username" required/> 
  
            <label for="password"> 
                  Password: 
              </label> 
            <input value ={password} onChange={handle_login2change} type="password"
                   placeholder="Enter your Password" required/> 
  
            <div class="wrap"> 
                <button type="submit"
                        onClick={register}> 
                    Submit 
                </button> 
            </div> 
        </form> 
        <p>Not registered? <a href="/register" style={{ "textDecoration": "none" }}>Create an account</a></p> 
        <p> 
            <a href="/forget_password" 
             style={{"text-decoration": "none"}}> 
              Forget Password? 
          </a> 
      </p> 
    </div> 

</body>


  )
}

export default Login
