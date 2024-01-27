import React ,{useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Forget_password = () => {
   
    const navigator=useNavigate();
    const [email,setemail]=useState("abhaychaurasiya53579@gmail.com");
    const handle1change=(event)=>{
                setemail(event.target.value);
            }
           
            const register = async (e)=>{
                       e.preventDefault();
                       
                      const res=   await fetch("https://blog-abh-back.onrender.com/api/forget_password",{
                            method:"POST",
                            body: JSON.stringify({email}),
                             headers:{"content-type":"application/json"}
                        })
                       
                       const data = await res.json();
                       if(data.Status=="success"){
                       navigator("/login");
                       }
                       else{
                        
                       }
                    }

  return (
    <body>
  

    <div class="main"> 
        <h1>GeeksforGeeks</h1> 
        <h3>Enter your Email</h3> 
        <form action=""> 
            <label for="first"> 
                  Username: 
              </label> 
            <input  value ={email} onChange={handle1change} type="text" 
                   id="first"
                   name="first" 
                   placeholder="Enter your Username" required/> 
  
            
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

export default Forget_password
