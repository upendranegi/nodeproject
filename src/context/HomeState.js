import React, { useState } from "react";
import Homecontext from "./Homecontext";
import { json } from "react-router-dom";

const HomeState =(props)=>{
const s1=[
 {   "name":"upen",
    "email":"upen@gmail.com",
   },

   {   "name":"upen12",
   "email":"upen1@gmail.com",
  },

  {   "name":"upen123",
  "email":"upen4@gmail.com",
 }
]


const [notes ,setNotes]= useState(s1);
 const createuser = async (name , email , password )=>{
   const  response = await fetch('http://localhost:5000/api/auth/create' ,{
    method:'post',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/plain, */*',
      },
      body: JSON.stringify(name , email , password),

   });
   
   const json= response.json();
//   const msg= json;
//   console.log(msg)
 }


    return (
        <Homecontext.Provider value={{notes, createuser}}>
        {props.children}
        </Homecontext.Provider>
    )
}

export default HomeState;