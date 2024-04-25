import React ,{useContext} from "react"
import { useState } from "react";
import Homecontext from "../context/Homecontext";

const Home = () => {

const context =useContext(Homecontext)
const {createuser}=context;
  const [formData,setFormData]=useState({
    name:"",
    email: "",
    password:""
  });


  // createuser(formData)
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

 const hsubmit=(e)=>{
  e.preventDefault();
  createuser(formData);
 }

  // const formsubmit = (event) => {
  //   event.preventDefault();
  
  //   // Send the form data to your API here
  //   axios.post('http://localhost:5000/api/auth/login/', {formData}).then(function(response){
  //     const resdata=response.data;
  //   console.log(resdata);
  //   // responsedresult(resdata)
  // });
  // }
  



 
  return (
    <>
     


      <form className="container my-3" onSubmit={hsubmit}>
      <div className="form-group">
    <label forhtml="exampleInputName">Name </label>
    <input type="text" className="form-control" id="exampleInputName" name="name" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter Name"/>
    
  </div>
  <div className="form-group">
    <label forhtml="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label forhtml="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={handleChange} placeholder="Password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>









    </>
  )
};

export default Home;