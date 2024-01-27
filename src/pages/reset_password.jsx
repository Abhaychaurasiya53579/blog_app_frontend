import React ,{useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Reset_password = () => {
    const navigator=useNavigate();
    const {token}= useParams();
    const [password,setpassword]=useState("abhaychaurasi.com");
    const [confirm_password,setconfirm_password]=useState("abhaychaurasi.com");
    const handle1change=(event)=>{
                setpassword(event.target.value);
            }
    const handle2change=(event)=>{
                setconfirm_password(event.target.value);
            }
           
            const register = async (e)=>{
                       e.preventDefault();
                      const res=   await fetch("https://blog-abh-back.onrender.com/api/reset_password/"+token,{
                            method:"PUT",
                            body: JSON.stringify({password,confirm_password}),
                             headers:{"content-type":"application/json"}
                        })
                       
                       const data = await res.json();
                       if(data.msg=="password not matching"){
                        alert("password not matching")
                       }
                       else if(data.msg=="session expired"){
                        alert("Session Expired")
                       }
                       else{
                       navigator("/login");
                       }
                    }

  return (
    <body>
  

    <div class="main"> 
        <h1>Daily Moments</h1> 
        <h3>Enter your Password</h3> 
        <form action=""> 
            <label for="first"> 
                   New Password: 
              </label> 
            <input  value ={password} onChange={handle1change} type="password" 
                   id="first"
                   name="first" 
                   placeholder="Enter Password" required/> 
             <label for="first"> 
                   Confirm Password: 
              </label> 
            <input  value ={confirm_password} onChange={handle2change} type="password" 
                   id="first"
                   name="first" 
                   placeholder="Confirm Username" required/>
            
            <div class="wrap"> 
                <button type="submit"
                        onClick={register}> 
                    Submit 
                </button> 
            </div> 
        </form> 
        </div> 

</body>

  )
}

export default Reset_password
