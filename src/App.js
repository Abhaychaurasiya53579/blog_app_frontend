import './App.css';
import {BrowserRouter as Routers,Route,Routes} from "react-router-dom"
import Home from "./pages/home";
import Login from "./pages/login";
import Forget_password from "./pages/forget_password";
import Register from "./pages/register";
import Navbar from "./components/navbar";
import Create_blog from "./pages/create_blog";
import { createContext,useState } from 'react';
import Update_post from "./pages/Update";
import Reset_password from "./pages/reset_password";

 export const authcontext = createContext();

function App() {
  const[auth,setauth]=useState(null);
  const[logged_in,setlogged_in]=useState(true);
  return (
   <>
   <authcontext.Provider value ={{auth,setauth,logged_in,setlogged_in}}>
   <div >
     <Routers>
     {/* <Navbar/> */}
     <div >
     <Routes>
     <Route  path ="/home" element ={<Home/>}/>
     <Route  path ="/create_blog" element ={<Create_blog/>}/>
     <Route  path ="/forget_password" element ={<Forget_password/>}/>
     <Route  path ="/login" element ={<Login/>}/>
     <Route  path ="/" element ={<Login/>}/>
     <Route  path ="/register" element ={<Register/>}/>
     <Route  path ="/update/:id" element ={<Update_post/>}/>
     <Route  path ="/reset_password/:token" element ={<Reset_password/>}/>
     </Routes>
     </div>
     </Routers>
     </div>
     </authcontext.Provider>
   </>
  );
}

export default App;
