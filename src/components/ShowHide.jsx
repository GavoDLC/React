import React, {useState} from "react";
function ShowHide() {
    //hook de react
    const [show, setShow]=useState(true);

  return <div>{show && <h2> HIDE ME!</h2>}</div>;
  
}

export default ShowHide;