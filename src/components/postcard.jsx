import React, { useEffect, useState } from "react";
import "../component_style/postcard.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Postcard = (props) => {
  const [loged_inuser, setloged_inuser] = useState("");

  // useEffect(()=>{
  //   const fetchdata=async()=>{
  //     const res = await fetch("http://localhost:7000/api/blog/user/find"+props.post._id,{
  //       method:"GET",
  //       headers:{
  //         token:localStorage.getItem("token")
  //       }
  //     })
  //     const data = await res.json();
  //     alert(data.msg);
  //     setloged_inuser(data.msg);

  //   }
  //   fetchdata();
  //   })

  const navigator = useNavigate();
  const delete_post = (e) => {
    e.preventDefault();

    const del_post = async () => {
      const res = await fetch(
        "https://blog-abh-back.onrender.com/api/blog/del/" + props.post._id,
        {
          method: "DELETE",
          headers: { token: localStorage.getItem("token") },
        }
      );

      const data = await res.json();
      console.log(data);
      if (data.msg == "unauthorized") alert("unauthorized user!!!");
    };
    del_post();
  };

  const handle_update = async (e) => {
    const res = await fetch(
      "https://blog-abh-back.onrender.com/api/blog/user/find" , 
      {
        method: "GET",
        headers: { token: localStorage.getItem("token") },
      }
    );
    const data = await res.json();
    if (data.id != props.post.user._id) alert("unauthorized user");
    else {
      navigator("/update/" + props.post._id);
    }
  };

  return (
    <div className="card">
      <div className="postcard_image">
        <img src={props.post.image} className="card-img-top " alt="..." />
      </div>
      <div className="card_content">
        <div className="card_body">
          <h5 className="card-title">{props.post.tittle}</h5>
          <p className="card-text">{moment(props.post.createdon).fromNow()}</p>
          <p className="card-text">{props.post.user.name}</p>
        </div>
        {props.post.user_id != loged_inuser ? (
          <div class="dropup-center dropup">
            <button>
              <a class="dropdown-item" onClick={handle_update}>
                  Update
                </a>
            </button>
            <button >
              <a class="dropdown-item" onClick={delete_post}>
                  Delete
                </a>
            </button>
            {/* <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" onClick={handle_update}>
                  Update
                </a>
              </li>
              <li>
                <a class="dropdown-item" onClick={delete_post} href="#">
                  Delete
                </a>
              </li>
            </ul> */}
          </div>
        ) : (
          <div>abay</div>
        )}
      </div>

      <p className="text">{props.post.content}</p>
    </div>
  );
};

export default Postcard;
