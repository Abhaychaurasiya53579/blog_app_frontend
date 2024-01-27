import React,{useEffect, useState,useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { authcontext } from '../App';
import "../component_style/update_blog.css";
import Navbar from "../components/navbar"


const Update = () => {


const navigator =useNavigate();

const  {id} =useParams();
    const [tittle,settittle]=useState("tittle");
    const [content,setcontent]=useState("content");
    const [image,setimage]=useState("image");
    const handlechange=(event)=>{
        settittle(event.target.value);
    }
    const handle1change=(event)=>{
        setcontent(event.target.value);
    }
    const handle2change=(event)=>{
        setimage(event.target.value);
    }

  useEffect(()=>{

    const fetchsingleblog = async ()=>{
      const res = await fetch("https://blog-abh-back.onrender.com/api/blog/" + id,{
        method:"GET",
        headers:{
          token:localStorage.getItem("token")
        }
      })
      const data = await res.json();
      if(res.ok && data){
       
        settittle(data.tittle);
        setimage(data.image);
        setcontent(data.content);
      }
      else{
        alert("nhi");
      }

    }
    // setcontent("content");
    //      setimage("image");
    //      settittle("tittle");
    fetchsingleblog();
  },[])




   
    const register_update= async (e)=>{
       e.preventDefault();
       const res=   await fetch("https://blog-abh-back.onrender.com/api/blog/update/"   + id ,{
             method: "PUT",
             
             body: JSON.stringify({tittle,content,image}),
              headers:{"content-type":"application/json",
            token:localStorage.getItem("token")
                        }
         })
        
         navigator("/home");
     }
    

  return (
    <div className='main_block'>
    <Navbar/>
    <div className='create_blog'>
    <h2 className ="heading">Update your Blog !!</h2>
    <form >
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label"></label>
    <input type="text" value ={tittle} onChange={handlechange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label"></label>
    <input type="text" value ={image} onChange={handle2change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
 <textarea  type="text" value ={content} onChange={handle1change}name="" id="" cols="60" rows="14"></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={register_update} >Submit</button>
</form>
</div>

 </div>
  )
}

export default Update
