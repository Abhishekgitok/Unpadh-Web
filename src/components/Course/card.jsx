
import { useState, useEffect } from "react";
import axios from "axios";






function Card () {
 
     

  useEffect(() => {
    axios.get("http://localhost:8000/course")
    .then((res) => 
    console.log(res)
    );
   

  }, []);

   


  return (
    <>
    
      
    </>
  )
}

export default Card;
