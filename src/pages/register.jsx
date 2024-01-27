import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigator=useNavigate();

    const [password,setpassword]=useState("password");
    const [email,setemail]=useState("email@asdf");
    
    const handle1change=(event)=>{
        setemail(event.target.value);
    }
    const handle2change=(e)=>{
        setpassword(e.target.value);
    }


    const register= async (e)=>{
        
       e.preventDefault();
      const res=   await fetch("https://blog-abh-back.onrender.com/api/user/create",{
            method:"POST",
            body: JSON.stringify({email,password}),
             headers:{"content-type":"application/json"}
        })
       const data = await res.json();
       if(data.msg==="old_user"){
        alert("Email Already Exist")
       }
       if(res.ok){
       navigator("/login");
       }
       else{
        console.log(email,password)
       }
    }
    





  return (

<body>
  

  <div class="main"> 
      <h1>Daily Moments</h1> 
      <h3>Enter your credentials</h3> 
      <form action=""> 
          <label for="first"> 
                Username: 
            </label> 
          <input  value ={email} onChange={handle1change} type="text" 
                 id="first"
                 name="first" 
                 placeholder="Enter your Username" required/> 

          <label for="password"> 
                Password: 
            </label> 
          <input value ={password} onChange={handle2change} type="password"
                 id="password" 
                 name="password" 
                 placeholder="Enter your Password" required/> 

          <div class="wrap"> 
              <button type="submit"
                      onClick={register}> 
                  Submit 
              </button> 
          </div> 
      </form> 
      <p> <a href="/login" style={{ "textDecoration": "none" }}>LOG IN</a></p> 
  </div> 

</body>

  )
}

export default Register
