import React, { useEffect} from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const formData = {};
  const formSubmit = (e) => {
     e.preventDefault();
    const entries = new FormData(e.target).entries();
    for (const pair of entries) {
      formData[pair[0]] = pair[1];
    }
    console.log(formData);
  };
  

  const downLoadData=(e)=>{
    e.preventDefault();
    axios.get('http://localhost:5000/api/users/1').then((response)=>{
      console.log(response);
    }).catch(err=>{
      console.log(err);
    })

  }

  useEffect(() => {
    // fetch('http://localhost:5000/api/employee/',{
    //   method:'POST',
    //   body:JSON.stringify(formData),
    //   headers:{
    //     'Content-Type':'application/json'
    //   }
    // }).then(response=>{
    //   console.log(response);
    // }).catch(err=>{
    //   console.log(err);
    // })


    axios.post('http://localhost:5000/api/users/',formData).then((response)=>{
      console.log(response);
    }).catch(err=>{
      console.log(err);
    })



    // const url="http://localhost:5000/api/employee/";
    // const options={
    //  method:'Post',
    //  body:JSON.stringify(formData),
    //  headers:{
    //   'Content-Type':'application/json',
    //    'Access-Control-Request-Headers':'Accept',
    //    'Access-Control-Allow-Origin':'*'
    //  }
    // }

    // const formUser=async(url)=>{
    //   try{
    //     await axios.post(url,options);
    //   }catch(err){
    //     console.log(err);
    //   }
    // }
    // const data=formUser(url);
    // console.log(data);
  });

  return (
    <>
    <button type="button" onClick={(e)=>downLoadData(e)}>download</button>
      <div className="main">
        <form onSubmit={formSubmit}>
          <p>Registration form</p>
          <div className="form-group">
            <label>firstName</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              autoComplete="false"
              name="firstName"
            />
          </div>
          <div className="form-group">
            <label>lastName</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              autoComplete="false"
              name="lastName"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="1223@gmail.com"
              autoComplete="false"
              name="email"
            />
          </div>
          <div className="form-group">
            <label>password</label>
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              autoComplete="false"
              name="password"
            />
          </div>
          <div className="form-group">
            <label>phone</label>
            <br />
            <input
              type="phone"
              className="form-control"
              placeholder="+91-348930905"
              autoComplete="false"
              name="phone"
            />
          </div>
          {/* <div className="form-group">
            <input type="file" className="form-control" />
          </div> */}
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
