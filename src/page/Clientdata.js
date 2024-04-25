import React, { useContext } from "react";


const Clientdata = (props) => {
    const { note } = props;


    return <>
       
            
                <div className="card text-start col-lg-3 my-2 mx-4">

                    <div className="card-body">
                        <h4 className="card-title">{note.name}</h4>
                        <p className="card-text">{note.email}</p>
                    </div>
                </div>

           

       


    </>;
};

export default Clientdata;