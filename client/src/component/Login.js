import React, { useEffect} from "react";
import axios from "axios";

const Login = () => {
//   const [formData,setFormData]=useState({
//       name:"",
//       email:"",
//       phone:"",
//       password:""
//   });
  const formData = {};
  const handler = (e) => {
    e.preventDefault();
    const entries = new FormData(e.target).entries();
    for (const pair of entries) {
      formData[pair[0]] = pair[1];
    }
    //console.log(formData);
  };
  useEffect(()=>{
    try{
        axios.request({
            method:'POST',
            url:'http://localhost:5000/api/auth/',
            data:formData,
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
    }catch(e){
        console.lod(e);
    }
  })
  return (
    <div className="main">
      <form onSubmit={handler}>
        <p>signIn</p>
        <div className="form-group">
          <label>Name</label>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="enter your email"
            name="email"
          />
        </div>
        <div className="form-group">
          <label>phone</label>
          <br />
          <input
            type="number"
            className="form-control"
            placeholder="+91-607841808"
            name="phone"
          />
        </div>
        <div className="form-group">
          <label>password</label>
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="enter your password"
            name="password"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
