
import React ,{useContext} from "react"
import Homecontext from "../context/Homecontext";
import Clientdata from "./Clientdata";

const Blogs = () => {
  const asd=useContext(Homecontext);
  const {notes ,setNotes}=asd;

    return(
      <>
      <h1>Blogs </h1>

      <div className="d-flex flex-wrap g-3"   >
      {notes.map((note)=>{
        return  <Clientdata note={note}/>
      })       }
      </div>
      </>
    )
  };
  
  export default Blogs;