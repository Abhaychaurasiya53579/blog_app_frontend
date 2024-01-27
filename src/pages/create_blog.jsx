import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../component_style/create_blog.css";
import Navbar from "../components/navbar"

const Create_blog = () => {
  const navigator = useNavigate();
  const [tittle, settittle] = useState("Tittle");
  const [content, setcontent] = useState("Content");
  const [image, setimage] = useState("image url ");
  const handlechange = (event) => {
    settittle(event.target.value);
    return;
  };
  const handle1change = (event) => {
    setcontent(event.target.value);
  };
  const handle2change = (event) => {
    setimage(event.target.value);
  };

  const register = async (e) => {
    e.preventDefault();
     const res=   await fetch("https://blog-abh-back.onrender.com/api/blog/create",{
           method:"POST",
           body: JSON.stringify({tittle,image,content}),
            headers:{"content-type":"application/json",
          "token":localStorage.getItem("token")
                      }
       })
      
      navigator("/home");
    
     
  };

  return (
    <div className='main_block'>
    <Navbar/>
    <div className="create_blog">
      <h2 className="heading">Write your Blog !!</h2>
      <form>
        <div className="mb-3 ">
          <label for="exampleInputEmail1" className="form-label"></label>
          <input
            type="email"
            value={tittle}
            onChange={handlechange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 ">
          <label for="exampleInputEmail1" className="form-label"></label>

          {/* <input type="file" onChange={handle2change} accept="image/*" /> */}
          <input type="email"value ={image} onChange={handle2change} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 ">
          <textarea value={content} onChange={handle1change} name=""></textarea>
        </div>

        <button type="submit" className="btn btn-primary" onClick={register}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Create_blog;
